/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
              {/*头像*/}
              <Image source={require('./img/jj.jpeg')} style={styles.avatarStyle} />

              {/*账号和密码*/}
              <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}/>
              <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle} />

              {/*登陆*/}
              <View style={styles.loginBtnStyle}>
                <Text style={{color:'white'}}>登录</Text>
              </View>

              {/*设置*/}
              <View style={styles.elseSetStyle}>
                <Text style={{color:'blue'}}>无法登陆</Text>
                <Text style={{color:'blue'}}>新用户</Text>
              </View>

              {/*其他登录方式*/}
              <View style={styles.elseLoginStyle}>
                <Text >其他的登陆方式:</Text>
                <Image source={require('./img/jj.jpeg')} style={styles.elseLoginImageStyle}/>
                <Image source={require('./img/jj.jpeg')} style={styles.elseLoginImageStyle}/>
                <Image source={require('./img/jj.jpeg')} style={styles.elseLoginImageStyle}/>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      backgroundColor:'#dddddd'
    },
    avatarStyle: {
      width:80,
      height:80,
      marginTop:80,
      marginBottom:20,
      borderRadius:40,
      borderColor:'white',
      borderWidth:2,
    },
    textInputStyle:{
      height:30,
      width:375,
      marginBottom:1,
      backgroundColor:'white',
      textAlign:'center',
    },
    loginBtnStyle: {
        height:30,
        width:350,
        marginTop:30,
        marginBottom:20,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    elseSetStyle: {
        width:350,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    elseLoginStyle: {
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        left:20,
    },
    elseLoginImageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:5,
    }
});

