<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobApplicant extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applicant', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('applicant_id');

            $table->foreign('applicant_id')
            ->references('id')->on('applicants')
            ->onDelete('cascade');

            $table->unsignedInteger('job_id');

            $table->foreign('job_id')
            ->references('id')->on('jobs')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_applicant');
    }
}
