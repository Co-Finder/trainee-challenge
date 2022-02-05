import {TouchableOpacity, KeyboardAvoidingView,StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, FONTS, SIZES } from '../constants';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
    const[fullName, setFullName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmation, setConfirmation] = useState("")
  
    
    function renderRegisterButton(){
        const navigation = useNavigation()
                
        function handleSubmit(navigation){
            //console.log("logged in")
            
        }
        
        return (
            <TouchableOpacity
                style = {{
                    backgroundColor : COLORS.primary,
                    width : 327,
                    height : 57,
                    borderRadius : 32,
                    alignItems : "center",
                    justifyContent : "center",
                }}
                onPress = {()=>handleSubmit(navigation)}>
                <View>
                    <Text style = {FONTS.buttonText}>Register</Text>
                </View>
            </TouchableOpacity>
            
        )
    }
  
    return (
    <View style = {styles.container}>
      <KeyboardAvoidingView style = {{alignItems : "center"}}>
        <Text style = {FONTS.secondaryText}>Please Enter Your Ristratuon Info</Text>
        <View style = {{width : 327,}}>
            <Input placeholder = "Full Name"
                value = {fullName}
                onChangeText = {(text)=>setFullName(text)}            
                inputContainerStyle = {{
                    borderColor : "#D0DBEA",
                    backgroundColor : "#FFFFFF",
                    borderWidth : 1,
                    borderRadius : 32,
                    
                }}
                leftIconContainerStyle = {{
                    paddingLeft : 20,
                    
                }}
                inputStyle = {{paddingLeft : 10}}/>
            
            <Input placeholder = "Email"
                value = {email}
                onChangeText = {(text)=>setEmail(text)}
                keyboardType = "email-address"
                inputContainerStyle = {{
                    borderColor : "#D0DBEA",
                    backgroundColor : "#FFFFFF",
                    borderWidth : 1,
                    borderRadius : 32,
                    
                }}
                leftIconContainerStyle = {{
                    paddingLeft : 20,
                    
                }}
                inputStyle = {{paddingLeft : 10}}/>
            
            <Input placeholder = "Password"
                value = {password}
                secureTextEntry = {true}
                onChangeText = {(text)=>setPassword(text)}
                inputContainerStyle = {{
                    borderColor : "#D0DBEA",
                    backgroundColor : "#FFFFFF",
                    borderWidth : 1,
                    borderRadius : 32,
                    
                }}
                leftIconContainerStyle = {{
                    paddingLeft : 20,
                    
                }}
                inputStyle = {{paddingLeft : 10}}/>
            
            <Input placeholder = "Confirm Password"
                value = {confirmation}
                onChangeText = {(text)=>setConfirmation(text)}
                secureTextEntry = {true}
                inputContainerStyle = {{
                    borderColor : "#D0DBEA",
                    backgroundColor : "#FFFFFF",
                    borderWidth : 1,
                    borderRadius : 32,
                    
                }}
                leftIconContainerStyle = {{
                    paddingLeft : 20,
                    
                }}
                inputStyle = {{paddingLeft : 10}}/>
            {renderRegisterButton()}
        </View>
                 
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : SIZES.width,
        alignItems : "center",
        justifyContent : "center",

    }
});
