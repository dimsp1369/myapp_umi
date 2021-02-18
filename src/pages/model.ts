import { Effect, Reducer } from 'umi';


export interface IState {
  counter: any
}

export interface IModel {
  namespace: string;
  state: IState;
  effect: {
    mathAction: Effect;
    addNewCounter: Effect
  };
  reducers: {
    mathAction: Reducer<IState>
    addNewCounter: Reducer<IState>
    save: Reducer<IState>
    set: Reducer<IState>
  }

}

const Model: IModel = {
  namespace: 'Counter',
  state: {
    counter: [{ id: Math.random(), value: 5 }],
  },

  effect: {
    * mathAction(_, { call, put }) {
      yield put({
        type: 'mathAction',
      });
    },
    * addNewCounter(_, { call, put }) {
      yield put({
        type: 'addNewCounter',
      });
    },
  },

  reducers: {
    mathAction(state: any, { payload }: any) {
      payload = { ...payload };
      let newCounter = [...state.counter.map((el: any) =>
        el.id === payload[0] ? ({ ...el, value: el.value + payload[1] }) : { ...el })];
      return { ...state, counter: newCounter };
    },
    addNewCounter(state: any, { payload }: any) {
      const newCounter = [...state.counter];
      newCounter.push({ id: Math.random(), value: Math.round(Math.random() * 10) });
      return {
        ...state, counter: newCounter,
      };
    },
    save(state: any, { payload }: any) {
      return {
        ...state, ...payload,
      };
    },
    set(state: any, { payload }: any) {
      return payload;
    },
  },
};

export default Model;
