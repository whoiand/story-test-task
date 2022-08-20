import {Dispatch, SetStateAction} from 'react';
import {Color} from '../../types/types';

interface ColorPickerProps {
  onColorChange: Dispatch<SetStateAction<Color>>;
  activeColor: Color;
}

export default ColorPickerProps;
