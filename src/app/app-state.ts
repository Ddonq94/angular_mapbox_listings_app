import { IAgent } from './map';
import { Record } from './record';

export interface AppState {
  agent?: IAgent;
  records?: Record[];
  recordID?: number;
  record?: Record;
}
