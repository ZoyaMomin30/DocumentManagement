import { View, Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/firebaseConfig';
import { useState } from 'react';

export default function SignUp() {

  // if(!email&&!password&&!fullName){

  // }

    const router =useRouter();

    // const navigation = useNavigation();

    // useEffect(()=>{
    //     navigation.setOptions({
    //         headerShown:false
    //     })
    // },[])


    //we define the state so we can store the value of email and password.
    const [email,setEmail]= useState();
    const [password,setPassword]=useState();
    const [fullName,setFullName]=useState();
    
    const onCreateAccount=()=>{

      if (!email || !password || !fullName) {
        console.log("All fields are required");
        return;
      }

      // const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  });

    }

  return (
    <View style={{
        padding:20,
        backgroundColor:"white",
        height:'100%'
    }}>
        {/* <TouchableOpacity onPress={()=>router.back()}><Ionicons name="arrow-back-sharp" size={24} color="black" /></TouchableOpacity> */}
      <Text style={{
        fontSize:30,
        fontWeight:"bold"

      }}>Create New Account</Text>

      {/* FULLNAME */} 
      <View>
            <Text style={{
                marginTop:15
            }}>Full Name:</Text>
            <TextInput 
            required={true}
            style={styles.input}
            placeholder="Enter Full Name"
            onChangeText={(value)=>console.log(value)}
            >
            </TextInput>
        </View>


      {/* Email */}

        <View>
            <Text style={{
                marginTop:15
            }}>Email:</Text>
            <TextInput 
            type="email"
            required={true}
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={(value)=>setEmail(value)}>
            </TextInput>
        </View>
        

        {/* password */}

        <View>
            <Text style={{
                marginTop:15
            }}>Password</Text>
            <TextInput 
            secureTextEntry={ true }
            required={true}
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={(value)=>setPassword(value)}>
            </TextInput>
        </View>

        {/* create account button */}

        <TouchableOpacity 
        onPress={()=>router.push('tabs/MainPage')}
        // onPress={onCreateAccount}
      
      style={{
        padding:15,
        backgroundColor:"black",
        borderRadius:15,
        marginTop:30
        }}>

        <Text style={{
            color:"white",
            textAlign:"center"
        }}>Create Account</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginTop:10,
        padding:15,
        borderWidth:1.5,
        borderRadius:20,
        borderColor:"black",
    }
})