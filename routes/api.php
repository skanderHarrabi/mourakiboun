<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
  'prefix' => 'auth'
], function () {
  Route::post('signin', 'AuthController@signin');
  Route::post('signup', 'AuthController@signup');

});
Route::group([
    'middleware' => 'auth:api',
], function () {
    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@user');
});
Route::resource("users", "UserController");
Route::get("actualities",'Api\ActualiteController@index');
Route::get("actualite/{id}",'Api\ActualiteController@show');
Route::get("rapports",'Api\RapportController@index');
Route::get("rapport/{id}",'Api\RapportController@show');
Route::get("medias",'Api\MediaController@index');
Route::get("newsletters",'Api\NewsletterController@index');
Route::get("projects",'Api\ProjectController@index');
Route::get("videos",'Api\VidioController@index');
Route::get("project/{id}",'Api\ProjectController@show');
Route::post("newsletter",'Api\NewsletterController@store');
Route::get("declarations",'Api\DeclarationController@index');
Route::get("publications",'Api\PublicationController@index');
Route::get("photos",'Api\PhotoController@index');
Route::get("activites",'Api\ActiviteController@index');
Route::get("staffAdministratif",'Api\StaffController@staffAdministratif');
Route::get("staffexecutif",'Api\StaffController@staffExecutif');
Route::get("processions",'Api\ProcessionController@index');
Route::post("contact",'Api\ContactController@store');
Route::get("declaration/{id}",'Api\DeclarationController@show');
Route::get("activity/{id}",'Api\ActiviteController@show');





