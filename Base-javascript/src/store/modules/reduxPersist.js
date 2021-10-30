import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
//import { reduce } from "async";

// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
    const persistedReducers = persistReducer(
        {
            key: 'REACT-BASE-TESTE',
            storage,
            whitelist: ['example'],
        },
        reducers
    );
return persistedReducers;
};

