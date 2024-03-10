import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import React from 'react';

const CloseIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="close-outline" />
);

const SearchIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="search-outline" />
);

export { CloseIcon, SearchIcon };
