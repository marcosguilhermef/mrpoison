<?php
namespace App\Http\Controllers\Home;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class Home extends Controller{

    public function index(){

        $list = collect(Storage::allFiles("packages"))->filter(function ($value, $key) {
            return $value !== "packages/.gitignore";
        })->map( function($directory) {
            $lastModified = Storage::lastModified($directory);
            return [
                "last_modified" => $lastModified,
                "file"          => $directory
            ];
        } )->toArray();
        
        $list = array_values($list);
        
        return Inertia::render("Home", [ "diretorios" => $list ]);
    }
}