<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->group(['prefix' => 'api/v1'], function () use ($router) {

    // $router->post('/jobs', function () use ($router) {
    //     dd(123123);
        // dd($_FILES);
    // });
    // $router->post('/jobs','JobsController@import');
    $router->post('/jobs','JobsController@import');
    $router->get('/jobs','JobsController@import');

    // $router->get('/jobs','JobsController@get');
    $router->get('/jobs/{id}','JobsController@detail');

    $router->get('/test','JobsController@test');

});
