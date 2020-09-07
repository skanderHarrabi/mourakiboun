<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    return [
        'title'=> $faker->title,
        'file'=> 'https://www.youtube.com/watch?v=dnJpFUDb0cw'
    ];
});
