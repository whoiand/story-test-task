import React from 'react';
import {StoryHeaderProps} from './types';
import styles from './styles';
import {Alert, Platform, View} from 'react-native';
import {HeaderButton} from '../HeaderButton';
import BackIcon from '../../assets/svgs/back.svg';
import UploadIcon from '../../assets/svgs/upload.svg';
import {launchImageLibrary} from 'react-native-image-picker';

const StoryHeader: React.FC<StoryHeaderProps> = ({onImageSelect}) => {
  const handleBackButtonPress = () => {
    Alert.alert('Previous page is not found');
  };

  const handleUploadButonPress = () => {
    launchImageLibrary({mediaType: 'photo', selectionLimit: 1}, ({assets}) => {
      if (!Array.isArray(assets)) {
        return;
      }

      const selectedImage = assets[0];

      const imageUri =
        Platform.OS === 'ios'
          ? selectedImage.uri?.replace('file://', '')
          : selectedImage.uri;

      onImageSelect(imageUri || '');
    });
  };

  return (
    <View style={styles.container}>
      <HeaderButton onPress={handleBackButtonPress} IconComponent={BackIcon} />
      <HeaderButton
        onPress={handleUploadButonPress}
        IconComponent={UploadIcon}
      />
    </View>
  );
};

export default StoryHeader;
