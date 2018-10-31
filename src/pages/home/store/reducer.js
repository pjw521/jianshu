import {fromJS} from "immutable"
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    list:[],
    articalList:[],
    bgImgs:[],
    page:1,
    showToTop:false
})
const reducer = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.INIT_HOME_STATE:
            return state.merge({
                list:fromJS(action.result.list),
                articalList:fromJS(action.result.articalList),
                bgImgs:fromJS(action.result.bgImgs),
                pageNum:1
            })
        case actionTypes.ADD_HOME_ARTICAL:
            return state.merge({
                "articalList":state.get('articalList').concat(action.list),
                "page":action.page
            })
        case actionTypes.CHANGE_SHOW_TOTOP:
            return state.merge({"showToTop":action.val})
        default:
            return state
    }
}

export default reducer;