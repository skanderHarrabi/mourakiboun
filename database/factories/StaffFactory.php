<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Staff;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Staff::class, function (Faker $faker) {
    return [
        'name'=> $faker->title,
        'function'=> $faker->text,
        'office'=> $faker->randomElement([1,2]),
        'description'=> $faker->paragraph,
        'image'=> 'eN3iMJVrc1AhPr3xs64sbvVAzPc8QHDJW39I3HVO.png'
    ];
});
