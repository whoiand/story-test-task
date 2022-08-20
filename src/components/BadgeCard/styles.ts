import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: 16,
    width: '80%',
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 8,
    marginRight: 16,
  },
  text: {
    color: 'white',
  },
  textContainer: {
    flex: 1,
  },
});

export default styles;
