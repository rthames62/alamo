import { FilmListingComponent } from './components/film-listing/film-listing.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('find-movie', {
      parent: 'app',
      url: '/find-movie',
      component: FilmListingComponent.selector
    });
};
