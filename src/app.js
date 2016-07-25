/**
 * Created by tww316 on 16/7/22.
 */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './views/login';
import './assets/scss/base.scss';
import './assets/scss/layout.scss';
import './assets/scss/reset.scss';
import './assets/scss/login.scss';

injectTapEventPlugin();

render(<Login />, document.getElementById('app'));
