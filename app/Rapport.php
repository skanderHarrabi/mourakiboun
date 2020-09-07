<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Rapport extends Model
{
  protected $fillable = [
    'name', 'content', 'date'
  ];
  protected $casts = [
    'date' => 'date',
  ];

  protected $appends=['date2'];

  public function getDate2Attribute(){
    $date = Carbon::parse($this->date);
    return $date->format("Y");
  }
//
}
