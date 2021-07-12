import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import mainReduser from './reducers'

const store = createStore( mainReduser , applyMiddleware(thunk))

export default store
