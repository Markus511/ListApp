import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ListItems = props => {
  // when swiping left show delete button
  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      // Delete item from db is handled in App component
      <TouchableOpacity onPress={props.handleDelete}>
        <View style={styles.deleteBtn}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    // Data inside flatlist in App component
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.container}>
          <Text style={styles.data}>{props.data}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteBtn: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 60,
  },
  data: {
    fontSize: 20,
    color: 'black',
  },
  deleteText: {
    fontSize: 20,
    color: 'black',
  },
});
