import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../stores/domain';
import { Button } from 'react-native-paper';

export default observer(() => {
  const { wineStore } = useStore();

  const handleSubmit = () => {
    wineStore.createWine('New wine');
  };

  return <Button onPress={handleSubmit}>Add a wine</Button>;
});
