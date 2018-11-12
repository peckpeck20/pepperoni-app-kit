import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { login, logout } from '../user/UserState'
import LoginForm from '../../components/LoginForm';



class UserLogin extends Component {
  render() {
    return (
      <View>
        <LoginForm
          handleLogin={this.props.login}
          handleLogout={this.props.logout}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps, { login, logout }
)(UserLogin);