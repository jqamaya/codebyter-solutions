<?php
// Write your code in PHP 8.2.5, Laravel 10.2.2
// Validate request body

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;


/**
 * Class FormController
 * @package App\Http\Controllers
 */
class FormController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show()
    {
        return view('pages.form.show');
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function save(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'header_line' => 'required|max:1024',
            'stars' => 'nullable|numeric|between:1,5'
        ]);
    }
}
