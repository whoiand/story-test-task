import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, View, Text} from 'react-native';
import {BadgeCard, ColorPicker, StoryHeader} from '../../components';
import styles from './styles';
import badgeColors from '../../constants/badgeColors';
import {Color} from '../../types/types';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const defaultImageUri = 'https://wallpaperaccess.com/full/1734423.jpg';

const badgeInitialColor = badgeColors[0];

const Story = () => {
  const translateBadgeX = useSharedValue(0);
  const translateBadgeY = useSharedValue(0);

  const [storyImageUri, setStoryImageUri] = useState(defaultImageUri);
  const [badgeCardColor, setBadgeCardColor] =
    useState<Color>(badgeInitialColor);

  const isImageSelected = defaultImageUri !== storyImageUri;

  const handlePanGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {translateX: number; translateY: number}
  >({
    onStart: (_, context) => {
      context.translateX = translateBadgeX.value;
      context.translateY = translateBadgeY.value;
    },
    onActive: (event, context) => {
      translateBadgeX.value = event.translationX + context.translateX;
      translateBadgeY.value = event.translationY + context.translateY;
    },
  });

  const badgeStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translateBadgeX.value},
      {translateY: translateBadgeY.value},
    ],
  }));

  return (
    <ImageBackground style={styles.container} source={{uri: storyImageUri}}>
      <SafeAreaView
        style={storyImageUri ? styles.container : styles.emptyStateContainer}>
        <StoryHeader onImageSelect={setStoryImageUri} />
        {!storyImageUri && (
          <Text style={styles.emptyStateText}>
            Please, select an image from gallery
          </Text>
        )}
        <GestureHandlerRootView style={styles.container}>
          {isImageSelected && (
            <View style={styles.badgeDraggableAreaContainer}>
              <PanGestureHandler
                activeOffsetX={[0, 0]}
                activeOffsetY={[0, 0]}
                onGestureEvent={handlePanGestureEvent}>
                <Animated.View style={badgeStyle}>
                  <BadgeCard
                    caption="Image caption"
                    imageUri={storyImageUri}
                    badgeColor={badgeCardColor}
                  />
                </Animated.View>
              </PanGestureHandler>
            </View>
          )}
        </GestureHandlerRootView>
      </SafeAreaView>
      {isImageSelected && (
        <ColorPicker
          onColorChange={setBadgeCardColor}
          activeColor={badgeCardColor}
        />
      )}
    </ImageBackground>
  );
};

export default Story;
