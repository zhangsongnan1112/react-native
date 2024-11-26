import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  StatusBar,
  Switch,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Dimension extends Component {
  constructor() {
    super();
    this.state = {
      switchValue: false,
    };
  }
  onPressLearnMore = () => {
    Alert.alert('标题', '这是一条内容', [
      {
        text: '取消',
        style: 'cancel',
      },
      {
        text: '确定',
        onPress: () => {
          // 这里可以添加确定按钮被按下后的操作逻辑，比如删除操作
          console.log('执行删除操作');
        },
      },
    ]);
  };
  switchChange = () => {
    this.setState({
      switchValue: !this.state.switchValue,
    });
  };
  render() {
    return (
      <View>
        <StatusBar hidden={this.state.switchValue} barStyle="linght-content" />
        <View style={styles.container}>
          <View style={styles.box}>
            <Button
              onPress={this.onPressLearnMore}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.box}>
            <Text>Dimension</Text>
          </View>
          <View style={styles.box}>
            <Text>Dimension</Text>
          </View>
          <View style={styles.box}>
            <Text>Dimension</Text>
          </View>
        </View>
        <Switch
          trackColor={{false: '#ccc', true: '#409Eff'}}
          thumbColor="green"
          onValueChange={this.switchChange}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 4,
    height: 90,
    backgroundColor: '#409567',
    borderWidth: 1,
    borderColor: '#153580',
  },
});
