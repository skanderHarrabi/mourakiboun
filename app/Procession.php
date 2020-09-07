<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Procession extends Model
{
    protected $fillable = [
        'starting_period', 'ending_period','description'
    ];
    protected $casts = [
        'starting_period' => 'date',
        'ending_period' => 'date'
    ];
}
