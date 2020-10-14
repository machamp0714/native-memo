import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddTodo: FC = () => {
  return (
    <View style={styles.container}>
      <Text>ToDo作成画面です</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddTodo;
