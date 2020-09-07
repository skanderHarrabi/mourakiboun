<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Activity;
use Faker\Generator as Faker;

$factory->define(Activity::class, function (Faker $faker) {
    return [
        'title'=> $faker->title,
        'content'=> $faker->paragraph,
        'description'=> $faker->paragraph,
        'image'=> 'eN3iMJVrc1AhPr3xs64sbvVAzPc8QHDJW39I3HVO.png'
    ];
});
