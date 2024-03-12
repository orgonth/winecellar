import { default as CustomTheme } from './style/theme.json';
import React from 'react';
import MainView from './src/components/MainView';
import { StoreProvider, rootStore } from './src/stores/domain';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: CustomTheme.colors,
};

export default () => {
  return (
    <StoreProvider value={rootStore}>
      <PaperProvider theme={theme}>
        <MainView />
      </PaperProvider>
    </StoreProvider>
  );
};
