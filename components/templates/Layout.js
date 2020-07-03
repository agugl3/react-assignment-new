import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from '../organisms/Game/Game.reducer';
import rootSaga from '../organisms/Game/Game.saga';

const Layout = ({ children }) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware, logger),
    );
    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store}>
            <header>Header</header>
            {children}
            <footer>footer</footer>
        </Provider>
    )
}

export default Layout;