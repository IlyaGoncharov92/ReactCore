import { createStore } from "redux";

const test1 = {
  models: ['zz1']
};

const tModel = 'zz2';

const tt = [...test1.models, tModel];

console.log('tt', tt);


const test2 = {...test1, models: tt};

const test3 = Object.assign(tModel, test1.models);

console.log('test2', test2);
console.log('test3', test3);

const ADD_ARTICLE = "ADD_ARTICLE";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  console.log('action', action);
  console.log('state', state);
  switch (action.type) {
    case ADD_ARTICLE:
      const res = {...state, articles: [...state.articles, action.payload]};
      const res2 = {articles: [...state, action.payload]};
      console.log('res', res);
      console.log('res2', res2);
      return res2;
    default:
      return state;
  }
};

export const store = createStore(rootReducer);

store.subscribe(() => console.log('Look ma, Redux!!'));

export const addArticle = function (article) {
  return {type: ADD_ARTICLE, payload: article};
};

let res = store.getState();

//console.log('res', res);

//store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) );

res = store.getState();

//console.log('res', res);
