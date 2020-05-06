import { createStore , applyMiddleware } from "redux";
import {weatherReducer} from "../reducer/weatherReducer";
import thunk from 'redux-thunk';

export const store = createStore(weatherReducer , applyMiddleware(thunk));