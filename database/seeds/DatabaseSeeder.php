<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(ActualiteSeeder::class);
        $this->call(ProjectsSeeder::class);
        $this->call(StaffSeeder::class);
        $this->call(ActivitySeeder::class);
        $this->call(DeclarationSeeder::class);
        $this->call(PhotoSeeder::class);
        $this->call(ProcessionSeeder::class);
        $this->call(PublicationSeeder::class);
        $this->call(RapportSeeder::class);
        $this->call(VideoSeeder::class);
    }
}
