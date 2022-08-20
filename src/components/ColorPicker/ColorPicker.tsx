import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {ColorPickerItem} from '../ColorPickerItem';
import badgeColors from '../../constants/badgeColors';
import ColorPickerProps from './types';
import {Color} from '../../types/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ColorPicker: React.FC<ColorPickerProps> = ({
  activeColor,
  onColorChange,
}) => {
  const {bottom} = useSafeAreaInsets();

  const RenderFlatListItem = ({item}: {item: Color}) => {
    const handleItemPress = () => onColorChange(item);
    const isItemActive = activeColor === item;

    return (
      <ColorPickerItem
        onPress={handleItemPress}
        isActive={isItemActive}
        color={item}
        style={styles.flatListItem}
      />
    );
  };

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <FlatList
        contentContainerStyle={styles.flatListContentContainer}
        horizontal
        renderItem={RenderFlatListItem}
        data={badgeColors}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ColorPicker;
