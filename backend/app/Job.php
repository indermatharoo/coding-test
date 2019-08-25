<?php 
namespace App;
use Illuminate\Database\Eloquent\Model;

class Job extends Model {    

    protected $table = 'jobs';    

    /*
    * The function returns collection of applicant assigned to specific job.
    *
    * @return object
    */
    public function applicants() 
    {
        return $this->belongsToMany('App\Applicant','job_applicant','job_id','applicant_id')->select('applicants.id','applicants.name');
    }

    /*
    * The function returns a location assigned to specific job.
    *
    * @return object
    */
    public function location() 
    {
        return $this->belongsTo('App\Location')->select('id','name');
    }
}