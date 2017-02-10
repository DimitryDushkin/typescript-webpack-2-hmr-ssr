import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './blocks/app/app';

const appContainer = document.querySelector('.app-container');

render(
    <AppContainer>
        <App />
    </AppContainer>,
    appContainer
);

declare var module:any;
if (module.hot) {
    module.hot.accept(App, () => {
        render(<AppContainer><App /></AppContainer>, appContainer);
    });
}