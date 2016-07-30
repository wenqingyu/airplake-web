/**
 * Created by tww316 on 16/7/22.
 */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';

injectTapEventPlugin();

render(<Routes />, document.getElementById('app'));
