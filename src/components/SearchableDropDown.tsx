import React from 'react';
import {
  AutocompleteDropdown,
  AutocompleteDropdownProps,
} from 'react-native-autocomplete-dropdown';
import { TextInput, TextInputProps, useTheme } from 'react-native-paper';

type SearchableDropDownProps = AutocompleteDropdownProps & {
  label?: string;
};

export default (props: SearchableDropDownProps) => {
  const theme = useTheme();
  const bgColor = theme.colors.surfaceVariant;
  const txtColor = theme.colors.onSurfaceVariant;
  const radius = 5;

  const TextInputWithLabel = React.forwardRef<any, TextInputProps>((p, ref) => {
    return <TextInput ref={ref} label={props?.label} {...p} />;
  });

  return (
    <AutocompleteDropdown
      clearOnFocus={false}
      closeOnBlur={true}
      closeOnSubmit={true}
      ignoreAccents={true}
      InputComponent={TextInputWithLabel}
      inputHeight={50}
      textInputProps={{
        placeholderTextColor: txtColor,
        style: {
          borderRadius: radius,
          backgroundColor: bgColor,
          color: txtColor,
        },
      }}
      inputContainerStyle={{
        backgroundColor: bgColor,
        borderRadius: radius,
      }}
      suggestionsListContainerStyle={{
        backgroundColor: bgColor,
      }}
      {...props}
    />
  );
};
