import React from "react"
import { RecommendWrapper,RecommendItem } from "../style.js"
import {connect } from "react-redux";

class Recommend extends React.PureComponent{
    render(){
    const {bgImgs} = this.props;
        return (
            <RecommendWrapper>
                {
                   bgImgs.map((item)=>{ 
                       return(
                        <RecommendItem imgUrl={item} key={Math.random()}/>
                       )
                }) 
                }
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => {
    return{
        bgImgs:state.getIn(["homeState","bgImgs"])
    }
}
export default connect(mapState,null)(Recommend);