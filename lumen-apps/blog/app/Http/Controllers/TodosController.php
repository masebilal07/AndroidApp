<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Todo;

class TodosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(){
        // return DB::table('todo')->get();
        return Todo::all();
        // return "Todos {GET:id}";
    }

    public function store(Request $request){
        // return "Todos {POST}". $request->name;
        // return $request;
        DB::table('todos')->insert([
            'name'=> $request->name
        ]);

        return "true";
    }

    public function update(Request $request, $id){
        return DB::table('todos')->where('id', $id)->update([
            'isDone'=> $request->isDone
        ]);
    }

    public function view($id){
        return json_encode(DB::table('todos')->where('id', $id)->first());
    }

    public function delete($id){
        return DB::table('todos')->where('id', $id)->delete();
    }
}
