<?php

namespace App\Http\Controllers\Download;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class Download extends Controller{

    public function index(Request $r){
        Storage::download($r->get("a"),"program");

        $explode = explode("/",$r->get("a"));

        if($r->get("a") != null){
            return Storage::download($r->get("a"));
        }
        return response()->redirectTo("/");
    }
}
