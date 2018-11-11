import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import {requestLogin} from '../user/UserState'



class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  componentDidMount() {
    this.props.requestLogin()
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
          // onPress={this.props.login}
          title="Login!"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,{requestLogin}
)(UserLogin);