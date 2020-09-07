<?php

use Illuminate\Database\Seeder;

class RapportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Rapport::class,10)->create();
    }
}
