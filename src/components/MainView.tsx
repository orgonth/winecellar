import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
import BottleListView from './BottleListView';
import CreateWine from './CreateWine';
import { Divider, Text, useTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

export default () => {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text variant="headlineMedium">Wine Cellar</Text>
        <CreateWine />
      </View>
      <Divider />
      <BottleListView />
      <View style={styles.bottomContainer}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    container: {},
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 216,
      backgroundColor: colors.background,
    },
    bottomContainer: {
      justifyContent: 'center',
      backgroundColor: colors.primary,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center',
    },
  });
