<?php

use Illuminate\Database\Seeder;

use App\Job;
use App\Location;
use App\Applicant;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        $location = new Location();
        $location->name = 'Brisbane';
        $location->save();

        $job = new Job();
        $job->title       =  'The dream job';
        $job->description =  'The dream job';
        $job->date        =  date('Y-m-d');
        $job->location_id =  $location->id;
        $job->save();

        $applicant = new Applicant();
        $applicant->name = 'Best Employee';
        $applicant->save();

        $job->applicants()->attach($applicant); // assign applicant to job.

    }
}
