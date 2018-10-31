import * as actionType from "./actiontype"
import axios from "axios"
import {fromJS} from "immutable";


export const changeFocused = (val) => {
    return{
        type:actionType.CHANGE_FOCUSED,
        val
    }
}
const changeList = (data) => {
    return{
        type:actionType.CHANGE_LIST,
        data:fromJS(data),
        totalPage:Math.ceil(data.length /10)
    }
}
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json',)
        .then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        })
        .catch((err) => {
        })
    }
}
export const changeMouseIn = (val) => {
    return{
        type:actionType.CHANGE_MOUSEIN,
        val
    }
}  
export const changePage = (val) => {
    return{
        type:actionType.CHANGE_PAGE,
        val
    }
}  
