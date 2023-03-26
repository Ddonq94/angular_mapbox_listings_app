import { createAction, props } from '@ngrx/store';
import { IAgent } from './map';
import { Record } from './record';

export const addRecord = createAction(
  '[Record] Add Record',
  props<{ record: Record }>()
);

export const selectRecord = createAction(
  '[Record] Select Record',
  props<{ recordID: number | undefined }>()
);

export const setAgent = createAction(
  '[Record] set Record',
  props<{ agent: IAgent }>()
);

export const setRecord = createAction(
  '[Record] Set Record',
  props<{ record: Record }>()
);
