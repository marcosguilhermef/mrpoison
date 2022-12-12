<?php

namespace App\Http\Controllers\Upload;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class Upload extends Controller
{
    public function index(Request $r){
        return Inertia::render("Upload", [ "_token" => csrf_token() ]);
    }

    public function store(Request $r){
        $files = $r->all();

        if($files == null){
            return response()->json([ "error" => "ok"], 400);
        }

        foreach($files as $key => $value){
            $value->storeAs("packages",$value->getClientOriginalName());
        }

        return response()->json([ "status" => "ok"], 200);
    }
}
