# Coding Challenge

Front-end React application that allows users to list, view and import jobs into the system. The data will come via Api built-in Lumen. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What things you need to install the software and how to install them
- Docker

## Installation

* Install [Docker](https://docs.docker.com/get-started/)
* Build: `docker-compose build`
* Run: `docker-compose up`
* Run: `docker-compose exec coding-challenge-backend php artisan migrate`
* Run: `docker-compose exec coding-challenge-backend chmod -R 777 storage`

## Development
* Lumen backend: http://localhost:8001
* React frontend: http://localhost:8002

## Staging
* Lumen backend: "Staging URL here"
* React frontend: "Staging URL here"

## Production
* Lumen backend: "Live URL here"
* React frontend: "Live URL here"

## Test Cases

* Run: `docker-compose exec coding-challenge-backend ./vendor/bin/phpunit tests/DatabaseTest.php`
* Run: `docker-compose exec coding-challenge-backend vendor/bin/phpunit tests/JsonTest.php`

##Frontend

#### Environment Variables 

The following environment variables need to be set up on the system.

- frontend/src/Config.js
```
global.apiUrl - set api url here(default value is already assigned).
```

##Backend

#### Environment Variables 

The following environment variables need to be set up on the system.

- backend/.env
```
API_URL - set api url here(default value is already assigned).
```

### Database Information

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

## Deployment

Add additional notes about how to deploy this on a live system.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Resources

* [React](https://reactjs.org/)
* [Lumen](https://lumen.laravel.com/)
* [Sidekicker Coding Challenge](https://github.com/getsidekicker/coding-challenge/)