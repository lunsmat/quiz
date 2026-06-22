import React from 'react';

import { Provider } from './components/ui/provider';

const App: React.FC = () => {
    return (
        <Provider>
            <h1>Hello World!</h1>
        </Provider>
    );
}

export default App;
