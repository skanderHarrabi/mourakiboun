<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Project;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'name'=> $faker->title,
        'content'=> $faker->paragraph,
        'image'=> 'eN3iMJVrc1AhPr3xs64sbvVAzPc8QHDJW39I3HVO.png'
    ];
});
