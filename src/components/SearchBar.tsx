import {
  Button,
  Icon,
  IconElement,
  Input,
  Layout,
  List,
  ListItem,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import React, { ReactElement, useEffect } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { CloseIcon, SearchIcon } from './common/icons';

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
    <TouchableWithoutFeedback onPress={onClearIconPress}>
      <CloseIcon {...props} />
    </TouchableWithoutFeedback>
  );

  const data = new Array(16).fill({
    title: 'Title',
    description: 'Desc',
  });

  const renderItemAccessory = (): React.ReactElement => (
    <Button size="tiny">FOLLOW</Button>
  );

  const renderItemIcon = (props): IconElement => (
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
      <Layout style={{ visibility: resultVisibility ? 'visible' : 'hidden' }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <List style={styles.list} data={data} renderItem={renderItem} />
          </View>
        </View>
      </Layout>
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    bottom: 0,
    left: 0,
    right: 0,
  },

  content: {
    padding: 3,
    backgroundColor: 'grey',
    shadowRadius: 8,
    shadowOpacity: 0.3,
    elevation: 3,
    shadowOffset: { width: 0, height: 8 },
    borderRadius: 5,
    maxHeight: 200,
  },

  list: {
    borderRadius: 3,
  },

  searchInput: {},
});
