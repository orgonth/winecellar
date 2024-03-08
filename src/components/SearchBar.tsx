import { Input, StyleService, useStyleSheet } from '@ui-kitten/components';
import React, { ReactElement } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { CloseIcon, SearchIcon } from './common/icons';

export default () => {
  const styles = useStyleSheet(themedStyles);
  const [searchString, setSearchString] = React.useState<string>();

  const onClearIconPress = (): void => {
    setSearchString('');
  };

  const renderClearIcon = (props: any): ReactElement => (
    <TouchableWithoutFeedback onPress={onClearIconPress}>
      <CloseIcon {...props} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      style={styles.searchInput}
      placeholder="Search"
      value={searchString}
      onChangeText={setSearchString}
      accessoryLeft={SearchIcon}
      accessoryRight={renderClearIcon}
    />
  );
};

const themedStyles = StyleService.create({
  searchInput: {},
});
