import {
  Button,
  Divider,
  Icon,
  IconElement,
  Input,
  Layout,
  TopNavigation,
} from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';

const SearchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);
const CrossIcon = (props): IconElement => (
  <Icon {...props} name="close-outline" />
);

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Wine Cellar" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Button>Open</Button>
        <Input
          placeholder="Search"
          accessoryLeft={SearchIcon}
          accessoryRight={CrossIcon}
        />
      </Layout>
    </SafeAreaView>
  );
};
