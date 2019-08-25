<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class DatabaseTest extends TestCase
{
    // rollback the inserted data while testing. 
    use DatabaseTransactions;

    /**
     * Testing if the data gets entered in the system successfully after seeding.
     *
     * @return void
     */
    public function testExample()
    {
        $this->artisan('db:seed'); // run seeder

        $this->seeInDatabase('locations', ['name' => 'Brisbane']); //check if the values exits in the database.

        $this->seeInDatabase('jobs', ['title' => 'The dream job', 'description' => 'The dream job']); //check if the values exits in the database.
        
        $this->seeInDatabase('applicants', ['name' => 'Best Employee']); //check if the values exits in the database.

    }

}
