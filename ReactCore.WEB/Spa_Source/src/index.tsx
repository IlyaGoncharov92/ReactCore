import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
//import { AppComponent } from './app/app.component';
import { AuthExample } from './app/app-test.component';

ReactDOM.render(
    <BrowserRouter>
        <AuthExample />
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
