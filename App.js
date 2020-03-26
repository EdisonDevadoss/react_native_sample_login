import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import LoginScreen from './src/Login';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoginScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
