import React from "react"
import {connect} from "react-redux"
import {HomeWrapper,HomeLeft,HomeRight,ToTop} from "./style.js"
import { List, Topic, Recommend,Writer} from "./components"
import * as actions from "./store/actions.js"
class Home extends React.PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4526/73a226693f83ee2920d31207c881b7c6eeb46761.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showToTop?<ToTop onClick={this.toTop}>返回顶部</ToTop>:''}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.initHomeState();
        this.bindEvent();
    }
    componentWillMount(){
        window.removeEventListener('scroll',this.props.changeToTop);

    }
    toTop = () => {
        window.scrollTo(0,0);
    }
    bindEvent =() => {
        window.addEventListener('scroll',this.props.changeToTop)
    }
}
const mapState = (state) =>({
    showToTop:state.getIn(['homeState',"showToTop"])
})
const mapDispatch = (dispatch) =>({
    initHomeState(){
        dispatch(actions.getHomeData())
    },
    changeToTop(val){
        if(document.documentElement.scrollTop > 100){
            dispatch(actions.changeShowToTop(true));
        } else{
            dispatch(actions.changeShowToTop(false));
        }  
        
    }
})
export default connect(mapState,mapDispatch)(Home);

