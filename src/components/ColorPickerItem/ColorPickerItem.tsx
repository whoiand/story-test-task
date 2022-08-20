import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {ColorPickerItemProps} from './types';

const ColorPickerItem: React.FC<ColorPickerItemProps> = ({
  isActive,
  onPress,
  color,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isActive ? styles.activeItem : styles.inactiveItem,
        {backgroundColor: color},
        style,
      ]}
    />
  );
};

export default ColorPickerItem;
