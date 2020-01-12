export interface ISession {
  cinemaId: string;
  sessionId: string;
  filmHeadOfficeCode: string;
  filmSlug: string;
  filmName: string;
  status: string;
  businessDateClt: string;
  showTimeClt: string;
  cinemaTimeZoneName: string;
  showTimeUtc: string;
  ticketTypesLoyaltyCount: number;
  ticketTypesVoucherCount: number;
  ticketTypesNormalCount: number;
  reservedSeating: boolean;
  screenNumber: string;
  attributes: AttribueID[];
  isClosedCaptioningAvailable: boolean;
  isDescriptiveAudioAvailable: boolean;
  isAssistedListeningAvailable: boolean;
  formatName: string;
  formatSlug: string;
  recognitionIds: string[];
}

export interface ISessionAttribute {
  id: AttribueID;
  name: string;
  description: string;
  isUserVisible: boolean;
  isUserFilterable: boolean;
}

type AttribueID = 'ALAMO_ONLY' | 'AA' | 'ADVANCE' | 'AFA' | 'FIRST_RUN';
