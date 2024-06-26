import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/domain';
import { IBottle } from '../stores/domain/Models';
import { Button, Icon, List, Text } from 'react-native-paper';

interface IListItem {
  item: IBottle;
  index: number;
}

const renderItemAccessory = (): React.ReactElement => <Button>FOLLOW</Button>;

const renderItemIcon = () => <Icon source="camera" size={20} />;

export default observer(() => {
  const { localStore } = useStore();
  const bottles = localStore.rack.bottles;

  const renderItem = ({ item }: IListItem): React.ReactElement => (
    <List.Item
      title={`${item.wine.title}, ${item.year}`}
      description={item.id as string}
      left={renderItemIcon}
      right={renderItemAccessory}
    />
  );

  return (
    <>
      <Text>
        Capacity {bottles.length}/{localStore.rack.capacity}
      </Text>
      <FlatList
        style={styles.container}
        data={bottles}
        extraData={bottles.length} // force refresh
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id as string}
      />
    </>
  );
});

const styles = StyleSheet.create({
  container: {},
});
