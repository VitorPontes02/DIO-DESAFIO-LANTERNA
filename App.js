import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNshake from 'react-native-shake';

const app = () => 
{
  const [toggle, setToggle] = useState(false);

  const handleOnPress = () => setToggle((oldToggle) => !oldToggle)

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() =>{
    const subscription = RNshake.addListeber(()=>{
      setToggle(oldToggle => !oldToggle);
    });
    return ()=> subscription.remove();
  },[] );

  return(
  <View style={toggle? style.containerLight  :  style.container}>
    <TouchableOpacity onPress={handleOnPress}>
    <Image 
      style = {toggle? style.lightingOn : style.lightingOff}
      source={
        toggle
        ? require('./assets/flashbang_cor.png')
        : require('./assets/flashbang_png.png')
      }
    />
    <Image 
      style = {toggle? style.dioLogo : style.dioLogoOff}
      source={
        toggle
        ? require('./assets/logo_DIO.png')
        : require('./assets/logo_DIO.png')
      }
    />
    </TouchableOpacity>
  </View>
  );
}

export default app

const style = StyleSheet.create
({
  container:
  {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerLight:
  {
    flex:1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
  },
  lightingOn:
  {
    resizeMode:'contain',
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  lightingOff:
  {
    resizeMode:'contain',
    alignSelf:'center',
    tintColor:'white',
    width: 150,
    height: 150,
  },
  dioLogo:
  {
    resizeMode: "contain",
    alignSelf: "center",

    width: 250,
    height: 250,
  },
  dioLogoOff:
  {
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: 'white',
    width: 250,
    height: 250,
  },
})