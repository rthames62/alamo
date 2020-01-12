import { IHttpPromise } from 'angular';
import { IMarket } from '../models/Market';
import { ISession, ISessionAttribute } from '../models/Session';
import { IFilm } from '../models/Film';
import { IHeroSlider } from '../models/HeroSlider';

interface IResponse {
  data: {
    market: IMarket;
    sessions: ISession[];
    sessionAttributes: ISessionAttribute[];
    films: IFilm[];
    heroSlider: IHeroSlider[];
  };
}

export class MarketService {
  static selector = 'marketService';

  public constructor(
    private $http: angular.IHttpService,
  ) {
    'ngInject';
  }

  public getMarket(): IHttpPromise<IResponse> {
    return this.$http.get<IResponse>('https://drafthouse.com/s/mother/v1/page/market/main/austin');
  }
}
