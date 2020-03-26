import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import { connect } from "react-redux";

function LoginScreen(props) {
  const [email, onChangeEmail] = React.useState();
  const [password, onChangePassword] = React.useState();

  const onLogin = () => {
    if (!email || !password) {
      alert('Enter email and password');
    } else {
      const {users} = props;
      const isLogIn = users.some(user => {
        return user.email === email && user.password === password
      });
      if (isLogIn) {
        alert('Log in successfully');
      } else {
        alert('Email or Password mismatched');
      }
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 10}}>
    <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
      onChangeText={text => onChangeEmail(text)}
      placeholder="Email"
      value={email}
    />
    <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
      onChangeText={text => onChangePassword(text)}
      placeholder="Password"
      value={password}
    />
      <Button
      onPress={onLogin}
      title="Login"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
  </View>
  );
}

function mapStateToProps(state: any): any {
  return {
    users: state.user.data
  };
}

export default connect(mapStateToProps)(LoginScreen);
