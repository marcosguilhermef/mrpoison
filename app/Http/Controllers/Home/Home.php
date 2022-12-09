<?php
namespace App\Http\Controllers\Home;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Cache\Store;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class Home extends Controller{

    public function index(){
        $list = collect(Storage::allFiles("packages"))->filter(function ($value, $key) {
            return $value !== "packages/.gitignore";
        })->toArray();
        return Inertia::render("Home", [ "diretorios" => $list ]);
    }
}