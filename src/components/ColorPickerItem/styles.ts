import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  activeItem: {
    borderColor: 'green',
  },
  inactiveItem: {
    borderColor: 'white',
  },
});

export default styles;
