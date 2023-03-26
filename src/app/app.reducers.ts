import { createReducer, on } from '@ngrx/store';
import { addRecord, selectRecord, setAgent, setRecord } from './app.actions';
import { IAgent } from './map';
import { Record } from './record';

const initialRecords: Record[] = [];
const initialRecord: Record | undefined = undefined;
const initialAgent: IAgent | undefined = undefined;

export const recordsReducer = createReducer<Record[]>(
  initialRecords,
  on(addRecord, (state, action) => state.concat({ ...action.record }))
);

export const recordIDReducer = createReducer<number | undefined>(
  -1,
  on(selectRecord, (_, action) => action.recordID)
);

export const recordReducer = createReducer<Record | undefined>(
  initialRecord,
  on(setRecord, (state, action) => {
    return { ...action.record };
  })
);

export const agentReducer = createReducer<IAgent | undefined>(
  initialAgent,
  on(setAgent, (state, action) => {
    return { ...action.agent };
  })
);
