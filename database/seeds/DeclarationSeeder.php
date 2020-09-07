<?php

use Illuminate\Database\Seeder;

class DeclarationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Declaration::class,10)->create();
    }
}
