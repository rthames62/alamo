// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';
import { FindMovieModule } from './find-movie/find-movie.module';

export const moduleName =
  angular.module('application', [
    coreModule,
    FindMovieModule
  ])
  .name;
