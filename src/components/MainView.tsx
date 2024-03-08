import {
  Divider,
  Icon,
  IconElement,
  Input,
  Layout,
  StyleService,
  useStyleSheet,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const SearchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);
const CrossIcon = (props): IconElement => (
  <Icon {...props} name="close-outline" />
);

export default () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Wine Cellar
        </Text>
      </View>
      <Divider />
      <Layout style={styles.formContainer}></Layout>
      <View style={styles.bottomContainer}>
        <Input
          style={styles.searchInput}
          placeholder="Search"
          accessoryLeft={SearchIcon}
          accessoryRight={CrossIcon}
        />
      </View>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'color-primary-default',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  formContainer: {
    flex: 1,
  },
  searchInput: {},
});
