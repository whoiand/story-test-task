import {ViewStyle} from 'react-native';
import {Color} from '../../types/types';

interface ColorPickerItemProps {
  isActive: boolean;
  onPress: () => void;
  color: Color;
  style: ViewStyle;
}

export type {ColorPickerItemProps};
