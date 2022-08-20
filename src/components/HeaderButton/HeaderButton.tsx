import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {HeaderButtonProps} from './types';

const HeaderButton: React.FC<HeaderButtonProps> = ({
  onPress,
  IconComponent,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconComponent height={16} width={16} stroke="black" />
    </TouchableOpacity>
  );
};

export default HeaderButton;
