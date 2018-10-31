import * as actionType from "./actiontype"
import {fromJS} from "immutable"

let defalutState = fromJS({
    focused:false,
    list:[],
    page:0,
    totalPage:1,
    mouseIn:false
})
const reducer = (state = defalutState,action) => {
    switch(action.type){
        case actionType.CHANGE_FOCUSED:
            return state.set('focused',action.val);
        case actionType.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actionType.CHANGE_MOUSEIN:
            return state.set("mouseIn",action.val)
        case actionType.CHANGE_PAGE:
            return state.set("page",action.val)
        default :
            return state;
    }
}
export default reducer;