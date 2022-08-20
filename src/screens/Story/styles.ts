import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  badgeDraggableAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16,
  },
  emptyStateContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  emptyStateText: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
