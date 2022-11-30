import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import * as reducers from './reducers'
import thunk from 'redux-thunk'

import { userReducer } from "./reducers/userReducer";
import { modalEditProjectReducer } from "./reducers/modalEditReducer";
import { projectReducer } from "./reducers/projectReducer";
import { taskReducer } from "./reducers/taskReducer";


const rootReducer = combineReducers({
    ...reducers,
    userReducer, modalEditProjectReducer, projectReducer, taskReducer
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
