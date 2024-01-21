import { createStore } from "redux";
import logger from "redux-logger";
import  {thunk}  from "redux-thunk";
const store = createStore(dataredux,applyMiddleware(thunk,logger.default));
import axios from "axios";
import { applyMiddleware } from "redux";

function dataredux(state={title:"first state"},action){
    switch (action.type){
        case "dataFullfiled":
            return {title:action.payload,pending:false};
        case "dataFailed":
            return action.payload;
        case "pending":
            return {...state, pending:true}
        default:
            return state;
    }
}

function getdata(){ // this is a plane function
    return async (dispatch,getState)=>{
        try{
            dispatch(getDataFullfiledPending());
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch(getDataFullfiled(data[0].title));
        }catch(error){
            // do something here 
            console.log(error.message);
            dispatch(getDataFailed(error));
        }
    } 
}


function getDataFullfiled(value){
    return {type:"dataFullfiled",payload:value};
}

function getDataFailed(error){
    return {type:"dataFailed",payload:error.message}
}

function getAccountUserPending(){
    return {type:"pending"}
}

store.dispatch(getdata());

