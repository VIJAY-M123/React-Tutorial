import React from "react";
import Action from "./Action";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { Deptreducers, Countreducer } from "./Reducers";

import { combineReducers } from "redux";

const rootreducer = combineReducers({
    Countreducer,
    Deptreducers,
    
})

const store = createStore(rootreducer);

export default function Index() {
    return (
        <div>
            <Provider store={store}>
                <Action />
            </Provider>

        </div>
    )
}