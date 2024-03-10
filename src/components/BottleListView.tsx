import React from 'react';
import {
  Button,
  Icon,
  IconElement,
  IconProps,
  List,
  ListItem,
} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../stores/domain';
import { Wine } from '../stores/domain/BottleStore';

interface IListItem {
  item: Wine;
  index: number;
}

const renderItemAccessory = (): React.ReactElement => (
  <Button size="tiny">FOLLOW</Button>
);

const renderItemIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="person" />
);

export default observer(() => {
  const { wineStore } = useStore();

  const renderItem = ({ item, index }: IListItem): React.ReactElement => (
    <ListItem
      title={item.title}
      description={item.id as string}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <List
      style={styles.container}
      data={wineStore.wines.slice()}
      renderItem={renderItem}
    />
  );
});

const styles = StyleSheet.create({
  container: {},
});
