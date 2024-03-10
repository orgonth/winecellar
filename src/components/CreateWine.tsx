import React from 'react';
import { observer } from 'mobx-react';
import { Button } from '@ui-kitten/components';
import { useStore } from '../stores/domain';

export default observer(() => {
  const { wineStore } = useStore();

  const handleSubmit = () => {
    wineStore.createWine('New wine');
  };

  return <Button onPress={handleSubmit}>Add a wine</Button>;
});
