<?php

use Illuminate\Database\Seeder;

class ProcessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Procession::class,10)->create();
    }
}
