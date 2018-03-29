import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppComponent } from './app/app.component';

ReactDOM.render(
    <BrowserRouter>
        <AppComponent />
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
