<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\News;
use Faker\Generator as Faker;

$factory->define(News::class, function (Faker $faker) {
    return [
        'title'=> $faker->title,
        'content'=> $faker->paragraph,
        'file'=> 'eN3iMJVrc1AhPr3xs64sbvVAzPc8QHDJW39I3HVO.png'
    ];
});
