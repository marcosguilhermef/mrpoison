<?php

namespace App\Http\Controllers\Remove;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class Remove extends Controller{

    public function index(Request $r){
        if($r->get("a") != null){
            Storage::delete($r->get("a"));
            return response()->redirectTo("/");

        }
        return response()->redirectTo("/");
    }
}
