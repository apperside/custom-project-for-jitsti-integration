/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { enableScreens } from 'react-native-screens';
import { Provider } from "react-redux";
import combinedReducers from "./src/redux";
import EntryPoint from "./src/screens/EntryPoint";
import ThemedApp from './src/ui/theme';

enableScreens();

export const LocalizationContext = React.createContext(null);

const App = () => {
  const store = configureStore({
    reducer: combinedReducers
  });

  return (
    <ThemedApp>
      <Provider store={store}>
        <EntryPoint />
      </Provider>
    </ThemedApp>
  );
};

export default App;
