const Reducer= (state,action)=>{
    switch(action.type){
        case "start":
            return {
                ...state,
                chatting:action.payload
            }
          
            case "callingname":
        return {
            ...state,
            name:action.payload
        }
        case "n-n":
            return{
                ...state,
                msg:[...state.msg,action.payload]
            }

    }
    
   

        return state;
    }
    export default Reducer;