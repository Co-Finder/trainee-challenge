import {TouchableOpacity, KeyboardAvoidingView,StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, FONTS, SIZES } from '../constants';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import AppContext from '../context/appContext';
import { Button } from 'react-native-elements';



export default function Register() {
    const[fullName, setFullName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmation, setConfirmation] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isRegiterLoading, setIsRegisterLoading] = useState(false)
    
    const {setUser} = useContext(AppContext)
    
    function renderRegisterButton(){
        const navigation = useNavigation()
                
        async function handleSubmit(){
            if(password !== confirmation){
                alert("passwords do not match")
                return
            }
            //remove any errors if there are any
            if(error){
                setError(false)
            }

            //start button animation
            setIsRegisterLoading(true)

            const auth = getAuth()
            try {
                let userCredentials = await createUserWithEmailAndPassword(auth, email, password)
                //console.log("UserCredentials : ", userCredentials)
                let data = {
                    id : userCredentials.user.uid,
                    fullName : fullName,
                }
                let docRef = addDoc(collection(db, "users"), data)
                setUser(data)

            } catch (error) {
                //console.log("Error Code:", error.code)
                //stop button animation
                setIsRegisterLoading(false)

                setError(true)

                switch (error.code){
                    case "auth/invalid-email":
                        setErrorMessage("Invalid email address")
                        break;
                    default : 
                        setErrorMessage("Something went wrong try again")
                }
                

            }
            
        }
        
        return (
            <>
            {error && (
                <View style = {{alignItems : "center", marginBottom : 10}}>
                    <Text style = {[FONTS.buttonText, {color : "red"}]}>{errorMessage}</Text>
                </View>
            )}
            
            <Button 
                title = "Register"
                containerStyle = {{
                    
                    width : 327,
                    height : 57,
                    borderRadius : 32,
                    alignItems : "center",
                    justifyContent : "center",
                }}
                buttonStyle = {{
                    width : "100%",
                    backgroundColor : COLORS.primary,
                    height : 57,
                    borderRadius : 32,
                    alignItems : "center",
                    justifyContent : "center",
                }}
                raised = {true}
                loading = {isRegiterLoading}
                onPress = {handleSubmit}/>
            </>
            
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
