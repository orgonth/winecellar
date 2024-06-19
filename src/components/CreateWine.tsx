import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/domain';
import { Button, TextInput } from 'react-native-paper';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { View, Modal } from 'react-native';
import SearchableDropDown from './SearchableDropDown';
import uuid from 'react-native-uuid';
import { Bottle, Wine } from '../stores/domain/Models';
import { countries } from '../../db/Countries';

export default observer(() => {
  const { localStore } = useStore();

  const [visible, setVisible] = React.useState(false);

  // Suggestions

  const countryList = Object.entries(countries).map(([k, v], i) => {
    return { id: k, title: v.name };
  });
  countryList.sort((a, b) => a.title.localeCompare(b.title));

  // Form values
  const [title, setTitle] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [area, setArea] = React.useState('');
  const [color, setColor] = React.useState('');
  const [year, setYear] = React.useState(0);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleSubmit = () => {
    const w = Wine.create({
      id: uuid.v4().toString(),
      title: title,
    });

    localStore.addWine(w);

    const b = Bottle.create({
      id: uuid.v4().toString(),
      year: year,
      wine: w.id,
    });

    localStore.rack.addBottle(b);
    hideModal();
  };

  return (
    <>
      <Modal visible={visible} onDismiss={hideModal} animationType="fade">
        <AutocompleteDropdownContextProvider>
          <View>
            <SearchableDropDown
              label="Title"
              onChangeText={setTitle}
              dataSet={[]}
            />
            <SearchableDropDown
              label="Country"
              onChangeText={setCountry}
              dataSet={countryList}
            />
            <SearchableDropDown
              label="Area"
              onChangeText={setArea}
              dataSet={[
                { id: '1', title: 'Bordeaux' },
                { id: '2', title: 'Bourgogne' },
              ]}
            />
            <SearchableDropDown
              label="Color"
              onChangeText={setColor}
              dataSet={[
                { id: '1', title: 'Red' },
                { id: '2', title: 'White' },
                { id: '3', title: 'Rosé' },
                { id: '4', title: 'Orange' },
              ]}
            />
            <TextInput
              label={'Year'}
              onChangeText={(txt) => setYear(Number(txt))}
              keyboardType="numeric"
              maxLength={4}
            />
            <Button onPress={handleSubmit}>Add</Button>
            <Button onPress={hideModal}>Close</Button>
          </View>
        </AutocompleteDropdownContextProvider>
      </Modal>
      <Button onPress={showModal}>Add a wine</Button>
    </>
  );
});
