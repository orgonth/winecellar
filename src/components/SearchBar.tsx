import React, { useEffect, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { Button, Icon, List, Searchbar, useTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

interface IListItem {
  title: string;
  description: string;
}

export default () => {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const [searchString, setSearchString] = React.useState<string>('');
  const [resultVisibility, setResultVisibility] =
    React.useState<boolean>(false);

  useEffect(() => {
    if (searchString.trim().length === 0) {
      setResultVisibility(false);
    } else {
      setResultVisibility(true);
    }
  }, [searchString]);

  const data = new Array(16).fill({
    title: 'Title',
    description: 'Desc',
  });

  const renderItemAccessory = (): React.ReactElement => <Button>FOLLOW</Button>;

  const renderItemIcon = () => <Icon source="camera" size={20} />;

  const renderItem = ({
    item,
    index,
  }: {
    item: IListItem;
    index: number;
  }): React.ReactElement => (
    <List.Item
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      left={renderItemIcon}
      right={renderItemAccessory}
    />
  );

  return (
    <View>
      {resultVisibility && (
        <View style={styles.container}>
          <Animated.View
            entering={FadeInDown}
            exiting={FadeOutDown}
            style={styles.content}
          >
            <FlatList style={styles.list} data={data} renderItem={renderItem} />
          </Animated.View>
        </View>
      )}
      <Searchbar
        style={styles.searchInput}
        placeholder="Search"
        value={searchString}
        onChangeText={setSearchString}
      />
    </View>
  );
};

const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    container: {
      // position: 'absolute',
      justifyContent: 'center',
      zIndex: 10,
      bottom: 0,
      left: 0,
      right: 0,
    },

    content: {
      padding: 3,
      backgroundColor: '#f2e5f7',
      elevation: 3,
      borderRadius: 5,
      maxHeight: 200,
    },

    list: {
      borderRadius: 3,
    },

    searchInput: {},
  });
