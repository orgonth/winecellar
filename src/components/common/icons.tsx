import { Icon, IconElement } from '@ui-kitten/components';
import React from 'react';
import { ImageStyle } from 'react-native';

const CloseIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="close-outline" />
);

const SearchIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="search-outline" />
);

export { CloseIcon, SearchIcon };
