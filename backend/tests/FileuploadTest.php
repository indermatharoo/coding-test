<?php

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class FileuploadTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $_FILES = [
            'file' => [
                'name' => 'jobs.csv',
                'type' => 'image/csv',
                'size' => 3,
                'tmp_name' => '/home/inder/Downloads/jobs.csv',
                'error' => 0
            ]
        ];
        $url = env('API_URL') . 'api/v1/jobs';
        $this->json('POST', $url, [])
        ->assertResponseOk()
        ;

    }

}
