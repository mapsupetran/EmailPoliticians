import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import MainStore from './stores/MainStore';
import { Provider } from 'mobx-react';
import './index.css';

ReactDOM.render(
    <Provider mainStore={MainStore}>
        <SearchBar />
    </Provider>,
    document.getElementById('root')
);
