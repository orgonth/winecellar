import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../stores/domain';
import { Wine } from '../stores/domain/BottleStore';
import { Button, Icon, List } from 'react-native-paper';

interface IListItem {
  item: Wine;
  index: number;
}

const renderItemAccessory = (): React.ReactElement => <Button>FOLLOW</Button>;

const renderItemIcon = () => <Icon source="camera" size={20} />;

export default observer(() => {
  const { wineStore } = useStore();

  const renderItem = ({ item }: IListItem): React.ReactElement => (
    <List.Item
      title={item.title}
      description={item.id as string}
      left={renderItemIcon}
      right={renderItemAccessory}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={wineStore.wines}
      extraData={wineStore.wines.length} // force refresh
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id as string}
    />
  );
});

const styles = StyleSheet.create({
  container: {},
});
