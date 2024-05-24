import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../stores/domain';
import { Button, TextInput } from 'react-native-paper';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { View, Modal } from 'react-native';
import SearchableDropDown from './SearchableDropDown';

export default observer(() => {
  const { wineStore } = useStore();

  const handleSubmit = () => {
    wineStore.createWine('New wine');
  };

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Modal visible={visible} onDismiss={hideModal} animationType="fade">
        <AutocompleteDropdownContextProvider>
          <View>
            <SearchableDropDown
              label="Country"
              dataSet={[
                { id: '1', title: 'France' },
                { id: '2', title: 'Italy' },
                { id: '3', title: 'Spain' },
              ]}
            />
            <SearchableDropDown
              label="Area"
              dataSet={[
                { id: '1', title: 'Bordeaux' },
                { id: '2', title: 'Bourgogne' },
              ]}
            />
            <SearchableDropDown
              label="Color"
              dataSet={[
                { id: '1', title: 'Red' },
                { id: '2', title: 'White' },
                { id: '3', title: 'Rosé' },
                { id: '4', title: 'Orange' },
              ]}
            />
            <TextInput label={'Year'} keyboardType="numeric" maxLength={4} />
            <Button onPress={handleSubmit}>Add</Button>
            <Button onPress={hideModal}>Close</Button>
          </View>
        </AutocompleteDropdownContextProvider>
      </Modal>
      <Button onPress={showModal}>Add a wine</Button>
    </>
  );
});
