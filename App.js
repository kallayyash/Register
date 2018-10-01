import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';

import Main from './src/Main';
import store from './src/config/store';

const persist = store();

const App = () => (
    <PersistGate loading={null} persistor={persist.persistor}>
  <Provider store={persist.store}>

      <Main />

  </Provider>
    </PersistGate>
);


export default App;
