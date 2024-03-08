import {
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import SearchBar from './SearchBar';
import BottleListView from './BottleListView';

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
      <Layout style={styles.formContainer}>
        <BottleListView />
      </Layout>
      <View style={styles.bottomContainer}>
        <SearchBar />
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
    backgroundColor: 'color-primary-default',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
