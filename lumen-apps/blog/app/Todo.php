<?php

namespace App;

use Illuminate\Database\eloquent\Model;

class Todo extends Model {

  public function getIdAttribute($value)
  {
    return strval($value);
  }

}
