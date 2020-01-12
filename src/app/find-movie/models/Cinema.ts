import { IFilm } from './Film';

export interface ICinema {
  id: string;
  loyaltyCinemaId: string;
  slug: string;
  name: string;
  status: string;
  timeZoneName: string;
  latitude: number;
  longitude: number;
  street1: string;
  street2: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  email: string;
  heroImageUrl: string;
  googleMapsUrl: string;
  appleMapsUrl: string;
  attachedBar: {
    name: string;
    websiteUrl: string;
  };
  isClosedCaptioningAvailable: boolean;
  isDescriptiveAudioAvailable: boolean;
  isAssistedListeningAvailable: boolean;
  selected?: boolean;
  filmsShowing?: IFilm[];
}
