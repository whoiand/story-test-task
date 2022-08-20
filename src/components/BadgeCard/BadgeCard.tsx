import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {BadgeCardProps} from './types';

const BadgeCard: React.FC<BadgeCardProps> = ({
  imageUri,
  badgeColor,
  caption,
}) => (
  <View style={[styles.container, {backgroundColor: badgeColor}]}>
    <Image style={styles.image} source={{uri: imageUri}} />
    <View style={styles.textContainer}>
      <Text style={styles.text}>{caption}</Text>
    </View>
  </View>
);

export default BadgeCard;
