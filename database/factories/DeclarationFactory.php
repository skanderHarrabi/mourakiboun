<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Declaration;
use Faker\Generator as Faker;

$factory->define(Declaration::class, function (Faker $faker) {
    return [
        'title'=> $faker->title,
        'content'=> $faker->paragraph,
        'image'=> 'eN3iMJVrc1AhPr3xs64sbvVAzPc8QHDJW39I3HVO.png'
    ];
});
