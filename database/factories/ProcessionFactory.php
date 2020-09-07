<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Procession;
use Faker\Generator as Faker;

$factory->define(Procession::class, function (Faker $faker) {
    return [
        'starting_period'=> $faker->date(),
        'ending_period'=> $faker->date(),
        'description'=> $faker->paragraph
    ];
});
