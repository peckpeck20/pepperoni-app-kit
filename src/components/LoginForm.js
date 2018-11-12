import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="username"
          onChangeText={(username) => this.setState({ username })}
        ></TextInput>
        <TextInput
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>
        <Button
          onPress={this.props.handleLogin}
          title="Login!"
          color="#841584"
          accessibilityLabel="Login"
        />
        <Button
          onPress={this.props.handleLogout}
          title="logout"
          color="blue"
          accessibilityLabel="logout"
        />
      </View>
    );
  }
}

export default LoginForm;