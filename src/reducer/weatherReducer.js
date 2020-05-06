import {GET_API, THEME} from '../action-types/index';

const initialState = {
  query: " ",
  weather: {},
  theme: true,
};

export const weatherReducer = (state = initialState , action) => {

  switch(action.type){
      // case GET_QUERY: {
      //     const { payload: query} = action;
      //     console.log('query from reducers');
      //     console.log(query);
      //     return {...state , query: query};
      // }
      case GET_API: {
          const { payload } = action;
          // debugger
          return {...state , weather: payload}
      }
      case THEME: {
          return { ...state, theme: !state.theme }
      }
      default: return state;
  }
};
