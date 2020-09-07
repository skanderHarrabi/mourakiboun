<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateNewsLetterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'=>'required|email|unique:news_letters'
        ];
    }
    public function messages()
    {
        return[
            'email.required'=>'email is required',
            'email.unique'=>'you already subscribe',
            'email.email'=>'invalid email'
        ];
    }
}
