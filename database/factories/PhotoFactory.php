<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Photo;
use Faker\Generator as Faker;

$factory->define(Photo::class, function (Faker $faker) {
    return [
        'title'=> $faker->title,
        'file'=> 'Eq9qZs2Fv9vWhgtozc3wtzXm00b4Ux4ZiNwTN5q9.jpeg',
        'year'=> $faker->date()
    ];
});
