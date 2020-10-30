import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './components/Row';
import Pixels from './components/Pixels'

export default function App() {
  return (
    <View style={styles.container}>
    <Row>
      <Pixels number={1} />
      <Pixels number={4} blank/>
      <Pixels number={1} />
    </Row>
    <Row>
      <Pixels number={2} />
      <Pixels number={2} />
    </Row>
    <Row>
      <Pixels number={6} />
    </Row>
    <Row>
      <Pixels number={2} />
      <Pixels number={1} blank/>
      <Pixels number={2} />
      <Pixels number={1} blank/>
      <Pixels number={2} />
    </Row>
    <Row>
      <Pixels number={5} />
    </Row>
    <Row>
      <Pixels number={1} />
      <Pixels number={1} blank/>
      <Pixels number={1} />
      <Pixels number={1} blank/>
      <Pixels number={1} />
      <Pixels number={1} blank/>
      <Pixels number={1} />
    </Row>
    <Row>
      <Pixels number={1} />
      <Pixels number={1} blank/>
      <Pixels number={1} />
      <Pixels number={1} blank/>
      <Pixels number={1} />
      <Pixels number={1} blank/>
      <Pixels number={1} />
    </Row>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
