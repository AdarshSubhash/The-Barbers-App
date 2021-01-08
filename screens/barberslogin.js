import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    FlatList} from 'react-native';

    export default class Barberlogin extends Component{
        constructor(){
            super();
            this.state={
                saloonname:"",
                saloonaddress:"",
timing:"",
dayshopclosed:""
            }
        }
        render(){
            return(
                <View>
                 <Text style={{color:'purple',backgroundColor:'black',fontSize:30,fontStyle:"italic"}}>
                     Barber Loginscreen
                     </Text>
             <View>
              <Text style={{color:'black',fontSize:25,fontStyle:"normal"}}>
                  Fill the below details to continue
              </Text>

               <TextInput
               style={{color:'black',fontSize:24,fontStyle:"normal"}}
               placeholder ={"Saloon Name"}
               maxLength ={40}
               onChangeText={(text)=>{
                 this.setState({
                   saloonname: text
                 })
               }}
             />

<TextInput
               style={{color:'black',fontSize:24,fontStyle:"normal"}}
               placeholder ={"Saloon Address"}
               maxLength ={100}
               onChangeText={(text)=>{
                 this.setState({
                   saloonaddress: text
                 })
               }}
             />

<Text style={{color:'black',fontSize:25,fontStyle:"normal"}}>
For Saloon Timing please specify properly.
For Example :-9am to 9pm .
</Text>

<TextInput
               style={{color:'black',fontSize:24,fontStyle:"normal"}}
               placeholder ={"Saloon Timing"}
               maxLength ={30}
               onChangeText={(text)=>{
                 this.setState({
                   timing: text
                 })
               }}
             />

<TextInput
               style={{color:'black',fontSize:24,fontStyle:"normal"}}
               placeholder ={"DaySaloonIsClosed"}
               maxLength ={40}
               onChangeText={(text)=>{
                 this.setState({
                   dayshopclosed: text
                 })
               }}
             />

            </View>   
            <View>
            <TouchableOpacity
                          onPress={()=>
                            this.BarberLoginDone()
                          }
                        >
                        <Text>Done</Text>
                        </TouchableOpacity>
            </View>
                </View>
            )
        }
    }