// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { FilmListingComponent } from './components/film-listing/film-listing.component';

/**
 * Import Module Services
 */
import { MarketService } from './services/market.service';

/**
 * Import Module Routing
 */
import { routing } from './find-movie.routes';

export const FindMovieModule =
  angular.module('application.findMovie', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(FilmListingComponent.selector, FilmListingComponent)

  /**
   * Register Module Services
   */
  .service(MarketService.selector, MarketService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
