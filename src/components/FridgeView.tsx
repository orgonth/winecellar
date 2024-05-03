import React from 'react';
import FridgeOutline from './svgs/FridgeOutline';
import { Button } from 'react-native-paper';

export default () => {
  const [cols, setCols] = React.useState<number>(7);
  const [rows, setRows] = React.useState<number>(10);

  return (
    <>
      <Button onPress={() => setCols(cols + 1)}>+</Button>
      <Button onPress={() => setCols(cols - 1)}>-</Button>
      <FridgeOutline cols={cols} rows={rows} />
    </>
  );
};
