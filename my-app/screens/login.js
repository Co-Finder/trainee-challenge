import React, { useState, useContext } from "react";
import {TouchableOpacity, KeyboardAvoidingView, Image, View, Text, StyleSheet, ScrollView, Platform, SafeAreaView, StatusBar} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../constants";
import {Icon, Input} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import AppContext from "../context/appContext";
import {db} from "../firebase/config";
import { Button } from 'react-native-elements';



//suppressing the firebase AsyncStorage waring
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Asyncstorage: ...']);


function Login(){
    const navigation = useNavigation()
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const {setUser} =  useContext(AppContext);
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginLoading, setLoginLoading] = useState(false)

    function renderTopSection(){
        //console.log("Top render called")
        return(
            <View style = {styles.topImagesContainer}>
                <View style = {styles.rectangleContainer}>
                    <Image 
                        style = {{width : 66, height : 66}}
                        source = {images.onBoardingReactangle}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse2Container}>
                    <Image 
                        style = {{width : 96, height : 96}}
                        source = {images.onBoardingEllipse2}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse3Container}>
                    <Image 
                        style = {{width : 66, height : 66}}
                        source = {images.onBoardingEllipse3}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse6Container}>
                    <Image 
                        style = {{width : 56, height : 56}}
                        source = {images.onBoardingEllipse6}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse7Container}>
                    <Image 
                        style = {{width : 86, height : 86}}
                        source = {images.onBoardingEllipse7}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.image3Container}>
                    <Image 
                        style = {styles.Image3}
                        source = {images.onBoardingImage3}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.image1Container}>
                    <Image 
                        style = {styles.Image1}
                        source = {images.onBoardingImage1}
                        resizeMode= "contain"/>
                </View>
                <View style = {{
                    marginTop : 152,
                    alignSelf : "center"            
                    }} >
                    
                    <Image 
                        style = {styles.topLogoCenterImage}
                        source = {images.onBoardingImage4}
                        resizeMode= "contain"/>
                </View>
                
            </View>
        )
    }


    function renderLoginInfo(){
        function handleEmailChange(val){
            setEmail(val)
            //console.log("Email is:", email)
        }

        function handlePasswordChange(val){
            setPassword(val)
        }
        
        return (
            <KeyboardAvoidingView style = {{alignItems : "center", marginTop : 17}}>
                 <Text style = {FONTS.secondaryText}>Please Enter Your Account Here</Text>
                 <View style = {{width : 327,}}>
                     <Input placeholder = "Email"
                        value = {email}
                        onChangeText = {handleEmailChange}
                        leftIcon = {{
                            type : "material-community",
                            name : "email-outline",
                            color : "#2E3E5C",
                        }}
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
                    
                    <Input placeholder = "password"
                        value = {password}
                        onChangeText = {handlePasswordChange}
                        leftIcon = {{
                            type : "feather",
                            name : "lock",
                            color : "#2E3E5C",
                        }}
                        rightIcon = {{
                            type : "antdesign",
                            name : "eyeo",
                            color : "#2E3E5C",
                        }}
                        inputContainerStyle = {{
                            borderColor : "#D0DBEA",
                            backgroundColor : "#FFFFFF",
                            borderWidth : 1,
                            borderRadius : 32,
                            marginTop : -17,        
                        }}
                        leftIconContainerStyle = {{
                           paddingLeft : 20,
                            
                        }}

                        rightIconContainerStyle = {{paddingRight : 20}}
                        inputStyle = {{paddingLeft : 10}}
                        secureTextEntry = {true}

                        />
                    
                 </View>
            </KeyboardAvoidingView>
        )
    }


    function renderSubmitButton(){
        

        async function handleSubmit(){
            
            if(error){
                setError(false)
            }
            //start animation of button
            setLoginLoading(true) 
            
            const auth = getAuth()
            try {
                let userCredentials = await signInWithEmailAndPassword(auth, email, password)
                //console.log("userCredentials:", userCredentials)
                if(userCredentials)
                {
                    const querySnapshot = await getDocs(collection(db, "users"))
                    //console.log("querySnapshot:", querySnapshot)
                    let userData;
                    querySnapshot.forEach(doc=> {
                        let data = doc.data()
                        if(data.id === userCredentials.user.uid)
                        {
                            userData = data
                        }
                    })

                    setUser(userData)
                }

            } catch (error) {
                //console.log("error code:", error.code)
                setError(true)
                setErrorMessage("Invalid email or password")
                //stop animation of button
                setLoginLoading(false)        
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
                title = "Login"
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
                loading = {loginLoading}
                onPress = {handleSubmit}/>
        </> 
        )
    }

    function RegistrationLink(){
        const navigation = useNavigation()
        return (
            <View style = {styles.registrationContainer}>
                <Text style = {[FONTS.secondaryText]}>Don't have an account?</Text>
                <Text 
                    style = {[FONTS.secondaryText, {marginLeft : 8, fontWeight : "bold", color : "blue"}]}
                    onPress = {()=>navigation.navigate("register")}>Register</Text>
            </View>
        )
    }
    
    return(
        
        <SafeAreaView style = {styles.androidContainer}>
            <View style = {styles.container}>
                {renderTopSection()}
                <View style = {{marginTop : 55}}>
                    <Text style = {FONTS.h1}>Start Cooking</Text>
                </View>
                {renderLoginInfo()}
                {renderSubmitButton()}
                <RegistrationLink/>
            </View>    
        
        </SafeAreaView>
        
        
    )
}


const styles = StyleSheet.create({
    androidContainer : {
        flex : 1,
        padding : Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor : COLORS.background,
    },

    container : {
        alignItems : "center",
        justifyContent : "center",
        
        //flex : 1,
        
    },
    topImagesContainer : {
        //justifyContent : "center",
        //alignItems : "center",
        // borderRadius : 30,
        // borderWidth : 8,
        // borderColor : "#FFFFFF",
        width : SIZES.width,
    },
    topLogoCenterImage : {
        width : 102,
        height : 102,
        
    },
    image1 : {
        width : 56,
        height : 56,
    },
    image1Container : {
        position : "absolute",
        //backgroundColor : "red",
        alignItems : "center",
        justifyContent : "center",
        top : 81.43,
        left : 105,
    },
    image3Container : {
        position : "absolute",
        top : 57,
        right : 77,
    },
    image3 : {
       height : 66,
       width : 66, 
    },
    ellipse7Container : {
        position : "absolute",
        right  : 45,
        top : 141,
    },
    ellipse6Container : {
        position : "absolute",
        top : 205,
        right : 91,
    },
    ellipse3Container : {
        position : "absolute",
        top : 227,
        left : 104,
    },
    ellipse2Container : {
        position : "absolute",
        top : 155,
        left : 63,
    },
    rectangleContainer : {
        position : "absolute",
        top : 237,
        right : 130
    },
    registrationContainer : {
        justifyContent : "center",
        width : SIZES.width,
        flexDirection : "row"
    }
})

{/* <TouchableOpacity
style = {{
    backgroundColor : COLORS.primary,
    width : 327,
    height : 57,
    borderRadius : 32,
    alignItems : "center",
    justifyContent : "center",
}}
onPress = {handleSubmit}>
<View>
    <Text style = {FONTS.buttonText}>Login</Text>
</View>
</TouchableOpacity> */}





export default Login;