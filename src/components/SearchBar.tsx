import {
  Button,
  Icon,
  IconElement,
  IconProps,
  Input,
  List,
  ListItem,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import React, { ReactElement, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { CloseIcon, SearchIcon } from './common/icons';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

interface IListItem {
  title: string;
  description: string;
}

export default () => {
  const styles = useStyleSheet(themedStyles);
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

  const onClearIconPress = (): void => {
    setSearchString('');
  };

  const renderClearIcon = (props: any): ReactElement => (
    <Pressable onPress={onClearIconPress}>
      <CloseIcon {...props} />
    </Pressable>
  );

  const data = new Array(16).fill({
    title: 'Title',
    description: 'Desc',
  });

  const renderItemAccessory = (): React.ReactElement => (
    <Button size="tiny">FOLLOW</Button>
  );

  const renderItemIcon = (props: IconProps): IconElement => (
    <Icon {...props} name="person" />
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: IListItem;
    index: number;
  }): React.ReactElement => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
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
            <List style={styles.list} data={data} renderItem={renderItem} />
          </Animated.View>
        </View>
      )}
      <Input
        style={styles.searchInput}
        placeholder="Search"
        value={searchString}
        onChangeText={setSearchString}
        accessoryLeft={SearchIcon}
        accessoryRight={renderClearIcon}
      />
    </View>
  );
};

const themedStyles = StyleService.create({
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
    backgroundColor: '#edf1f7',
    boxShadowRadius: 8,
    boxShadowOpacity: 0.3,
    elevation: 3,
    boxShadowOffset: { width: 0, height: 8 },
    borderRadius: 5,
    maxHeight: 200,
  },

  list: {
    borderRadius: 3,
  },

  searchInput: {},
});
