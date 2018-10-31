import axios from "axios"
import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"


const initHomeState = (result) =>({
    type:actionTypes.INIT_HOME_STATE,
    result
})

export const getHomeData = () =>{
    return (dispatch,getState) => {
        axios("/api/homeData.json")
        .then((res)=>{
            dispatch(initHomeState(res.data));
        })
    }
}

const addArtical = (list,page) => (
    {
        type:actionTypes.ADD_HOME_ARTICAL,
        list,
        page
    }
)
export const getMoreArtical = (page) => {
    return (dispatch) => {
        axios.get("/api/more.json?page=" + page)
            .then((res) => {
                dispatch(addArtical(fromJS(res.data.articalList),page+1));
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
export const changeShowToTop = (val) => {
    return{
        type:actionTypes.CHANGE_SHOW_TOTOP,
        val
    }
}