<?php

namespace App\Http\Controllers;

use Validator;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Job;
use App\Location;
use App\Applicant;

class JobsController extends Controller
{
    /*
    * The function returns a job detail with relational data such as applicants and location.
    *
    * @param $id contains requested user id.
    * @return array
    */
    public function detail($id) 
    {
        $response = ['status' => false, 'data' => []];

        // selectRaw function has need used to alter date format.`
        $job = Job::selectRaw('id,title,description,DATE_FORMAT(date,"%d-%m-%Y") date,location_id')->find($id);

        // if no job has been found default response will be returned.
        if(!$job)
            return $response;

        // Fetching relational data if job has been found.
        $job->applicants;
        $job->location;

        $response['status'] = true;
        $response['data']   = $job->toArray();

        return $response;
    }

    /*
    * The function returns all job detail with relational data such as location.
    *
    * @return array
    */
    public function get() 
    {
        $jobs = Job::selectRaw('id,title,location_id,DATE_FORMAT(date,"%d-%m-%Y") date')->with('location')->get();
        return $jobs;
    }

    /*
    * The function imports jobs into the system.
    *
    * @param $request belongs to Request class and contains all the data passed by http request.
    *
    * @return array
    */
    public function import(Request $request) 
    {
        
        $this->validate($request, [
            'file' => 'required|file|max:2048',
        ]);

        $response = ['status' => true,'message'=>'Data imported successfully.'];
        $fileName = time().$request->file('file')->getClientOriginalName();
        $request->file('file')->move(storage_path('import'),$fileName);

        $file = fopen(storage_path('import/'.$fileName), "r");
        $i = 0;
        while ( ($data = fgetcsv($file, 1000, ",")) !== FALSE )
        {
            $i++;
            // brief explaination of which column index contains which data.
            // 0 => "job title"
            // 1 => "job description"
            // 2 => "date"
            // 3 => "location"
            // 4 => "applicants"

            // skipping the headers row of the csv file.
            if($i == 1)
                continue;

            $job_title       = trim($data[0]);
            $job_description = trim($data[1]);
            $job_date        = trim($data[2]);
            // adjust date in proper format.
            $job_date        = Carbon::createFromFormat('d/m/Y', $job_date)->format('Y-m-d'); 
            $job_location    = trim($data[3]);
            $job_applicants  = trim($data[4]);
            $job_applicants  = explode(',',$job_applicants);

            // create location if it does not exist.
            $location = Location::where('name',$job_location)->first();
            if(!$location) {
                $location = new Location();
                $location->name = $job_location;
                $location->save();
            }

            // create job.
            $job = new Job();
            $job->title       =  $job_title;
            $job->description =  $job_description;
            $job->date        =  $job_date;
            $job->location_id =  $location->id;
            $job->save();

            foreach($job_applicants as $job_applicant):
                $job_applicant = trim($job_applicant);
                $applicant = Applicant::where('name', $job_applicant)->first();
                // Create applicant if does not exist.
                if(!$applicant) {
                    $applicant = new Applicant();
                    $applicant->name = $job_applicant;
                    $applicant->save();
                }
                $job->applicants()->attach($applicant); // assign applicant to job.
            endforeach;
        }
        fclose($file);
        return $response;
    }
}
