import { createStore } from "redux";

const ADD_ARTICLE = "ADD_ARTICLE";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload]};
    default:
      return state;
  }
};

export const store = createStore(rootReducer);

store.subscribe(() => console.log('Look ma, Redux!!'));

export const addArticle = article => ({type: ADD_ARTICLE, payload: article});

let res = store.getState();

//console.log('res', res);

//store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) );

res = store.getState();

//console.log('res', res);
