<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get("genvcf",[CustomerController::class,"Vcardtest"]);

Route::post("getprofile",[CustomerController::class,"Getprofile"]);
Route::get("allprofile",[CustomerController::class,"Allprofile"]);
Route::post("updateprofile",[CustomerController::class,"UpdteProfile"]);
Route::post("login",[CustomerController::class,"Login"]);

Route::post("addcustomer",[CustomerController::class,"Addcustomer"]);