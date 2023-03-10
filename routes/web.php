<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/  

Route::get('/',[ App\Http\Controllers\Home\Home::class, 'index' ]);
Route::get('/remove',[ App\Http\Controllers\Remove\Remove::class, 'index' ]);
Route::get('/download',[ App\Http\Controllers\Download\Download::class, 'index' ]);
Route::get('/upload',[ App\Http\Controllers\Upload\Upload::class, 'index' ]);
Route::post('/upload',[ App\Http\Controllers\Upload\Upload::class, 'store' ]);
