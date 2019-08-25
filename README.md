# Coding Challenge

Front-end React application that allows users to list, view and import jobs into the system. The data will come via Api built-in Lumen. 

## Prerequisites
- Docker

## Setup
* Install [Docker](https://docs.docker.com/get-started/)
* Build: `docker-compose build`
* Run: `docker-compose up`
* Run: `docker-compose exec coding-challenge-backend php artisan migrate`

## Test Cases
* Run: `docker-compose exec coding-challenge-backend ./vendor/bin/phpunit tests/DatabaseTest.php`
* Run: `docker-compose exec coding-challenge-backend vendor/bin/phpunit tests/JsonTest.php`

## Development
* Lumen backend: http://localhost:8001
* React frontend: http://localhost:8002

### Table Information

#### Applicants Table

- Table Name: `applicants`
- Primary Hash Key: `id (Unsigned Integer)`

#### Applicants Table

- Table Name: `applicants`
- Primary Hash Key: `id (Unsigned Integer)`

#### Locations Table

- Table Name: `locations`
- Primary Hash Key: `id (Unsigned Integer)`

#### Jobs Table

- Table Name: `jobs`
- Primary Hash Key: `id (Unsigned Integer)`
- Secondary Indexes:
  1.  Name: `jobs_location_id_foreign`
      - Hash Key: `location_id (Unsigned Integer)`

#### Applicants Table

- Table Name: `applicants`
- Primary Hash Key: `id (Unsigned Integer)`
- Secondary Indexes:
  1.  Name: `job_applicant_applicant_id_foreign`
      - Hash Key: `applicant_id (Unsigned Integer)`
  2.  Name: `job_applicant_job_id_foreign`
      - Hash Key: `job_id (Unsigned Integer)`

## Built With

* [React](https://reactjs.org/)
* [Lumen](https://lumen.laravel.com/)
* [Sidekicker Coding Challenge](https://github.com/getsidekicker/coding-challenge/)