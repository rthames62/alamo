import { MarketService } from '../../services/market.service';
import { IMarket } from '../../models/Market';
import { IFilm } from '../../models/Film';
import { ISession } from '../../models/Session';
import './film-listing.component.scss';
import { ICinema } from '../../models/Cinema';
import { removeDuplicateObjsFromArray } from '../../../core/utils/utils';

class FilmListingController {
  public market: IMarket;

  public films: IFilm[];

  public sessions: ISession[];

  public selectedTheater: ICinema;

  public selectedShowings: IFilm[];

  public constructor(
    private marketService: MarketService,
  ) {
    'ngInject';
  }

  public $onInit(): void {
    this.getMarket();
  }

  public getMarket(): void {
    this.marketService.getMarket().then(res => {
      const { data } = res.data;
      this.market = data.market;
      this.films = data.films;
      this.sessions = data.sessions;
      this.pullFilmsPerTheater();
    });
  }

  public selectTheater(id: string): void {
    this.market.cinemas.forEach(cinema => {
      cinema.selected = cinema.id === id;

      if (cinema.id === id) {
        this.selectedTheater = cinema;
      }
    });
  }

  // ideally this would be done server side and the cinema object would return with list of films
  // was unsure if films playing should only include those playing today, or just those that status are ONSALE
  private pullFilmsPerTheater(): void {
    this.market.cinemas.forEach(cinema => {
      // filtering sessions that match the cinemaId
      let matchedSessions = this.sessions.filter(session => cinema.id === session.cinemaId);
      const films: IFilm[] = [];

      // removing duplicate sessions from array by the filmSlug property
      matchedSessions = removeDuplicateObjsFromArray(matchedSessions, 'filmSlug');

      // filtering out all sessions that have the status ONSALE
      matchedSessions = matchedSessions.filter(session => session.status === 'ONSALE');

      // matching the session object to be able to display the film object
      matchedSessions.forEach(session => {
        const matchedFilm: IFilm = this.films.filter(film => film.slug === session.filmSlug)[0];
        films.push(matchedFilm);
      });

      // setting an array on the cinema object to pull from
      cinema.filmsShowing = films;
    });
  }
}

export class FilmListingComponent implements angular.IComponentOptions {
  static selector = 'filmListing';
  static template = require('./film-listing.component.html');
  static controller = FilmListingController;
}
