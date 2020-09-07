<?php

namespace App\Nova;

use Guillaumeferron\PostContent\PostContent;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Adnanchowdhury\UploadcareImage\UploadcareImage;
use Laravel\Nova\Http\Requests\NovaRequest;
use NumaxLab\NovaCKEditor5Classic\CKEditor5Classic;

class Project extends Resource
{
  /**
   * The model the resource corresponds to.
   *
   * @var string
   */
  public static $model = '\App\Project';

  public static $title = 'name';

  public static $search = [
    'content', 'name'
  ];

  public static function label()
  {
    return 'Project';
  }

  /**
   * Get the fields displayed by the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function fields(Request $request)
  {
    return [
      ID::make()->sortable(),
      Text::make('Title', 'name')
        ->rules('required', 'min:5')
        ->sortable(),
      Textarea::make('Content', 'content')
        ->showOnIndex()
        ->sortable(),
      File::make('image', 'image')
        ->disk('public')
        ->rules('required'),
      File::make('icon', 'icon')
        ->disk('public')
        ->rules('required'),

    ];
  }

  /**
   * Get the cards available for the request.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function cards(Request $request)
  {
    return [];
  }

  /**
   * Get the filters available for the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function filters(Request $request)
  {
    return [];
  }

  /**
   * Get the lenses available for the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function lenses(Request $request)
  {
    return [];
  }

  /**
   * Get the actions available for the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function actions(Request $request)
  {
    return [];
  }
}
