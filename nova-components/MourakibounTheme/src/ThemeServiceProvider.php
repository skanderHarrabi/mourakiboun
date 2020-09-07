<?php

namespace Mourakibon\MourakibounTheme;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::theme(asset('/mourakibon/mourakibounTheme/theme.css'));

        $this->publishes([
            __DIR__.'/../resources/css' => public_path('mourakibon/mourakibounTheme'),
        ], 'public');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
