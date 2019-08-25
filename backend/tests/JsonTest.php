<?php

use Illuminate\Http\Response;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

use App\Job;

class JsonTest extends TestCase
{
    // rollback the inserted data while testing. 
    use DatabaseTransactions;

    /**
     * Testing if the data gets entered in the system successfully after seeding.
     *
     * @return void
     */
    public function testJson()
    {
        $this->artisan('db:seed'); // run seeder.
        
        $job = Job::where('title','The dream job')->first(); // fetch job detail.

        // check the get request.
        $this->json('GET', env('API_URL')."api/v1/jobs/{$job->id}", [])
        ->seeJson([
           'name'   => 'Best Employee',
           'status' => true
        ]);
    }

}
