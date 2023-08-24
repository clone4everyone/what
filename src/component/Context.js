import React, { useReducer, useState } from "react";
import { useContext } from "react";
import Reducer from "./Reducer";
const initialize={
 
    chatting:0,
    text:"",
  msg:[],
  name:""

}


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
const [state,detach]=useReducer(Reducer,initialize);

const chat=(img,Name)=>{
    
 detach({type:"start",
payload:{
    name:Name,
    img:img,
    call:"call2.png",
    video:"video.png",
    search:"search.png",
    emoji:"emoji.png",
    add:"add.png",
    voice:"voice.jpg"
}})
}

const callingname = (namevalue) => {

    detach({
        type: "callingname",
        payload: namevalue
    }
    )

}

const add = (e) => {
    e.preventDefault();
    detach({type:"n-n",
payload:{
    text:state.name,
    num:Math.random()*100,
}})
    

}




    return (
        <AppContext.Provider value={{...state,chat,callingname,add}}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };