import React from "react"
import spin from "./spin.png"
import {
    HeaderWrapper,
    Logo, Nav, NavItem,
    NavSearch, Addition, Button,
    SearchWrapper, SearchInfo, SearchInfoTitle,
    SearchInfoSwitch, SearchInfoList, SearchInfoItem
} from "./style.js"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "./store/actions.js";
import {Link} from "react-router-dom"
class Header extends React.PureComponent {
    render() {
        let { focused, changeFocused,list } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/"><Logo></Logo></Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <SearchWrapper>
                        <NavSearch
                            onFocus={() => changeFocused(true,list)}
                            onBlur={() => changeFocused(false,list)}
                            className={focused ? "focused" : ""}
                        ></NavSearch>
                        <i className={focused ? "focused iconfont" : "iconfont"}>&#xe613;</i>
                        {this.getItems()}
                    </SearchWrapper>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                </Nav>
                <Addition>
                    <Button className="write">
                        <i className="iconfont">&#xe62b;</i>
                        写文章
                </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getItems = () => {
        const { focused, list, page, totalPage, mouseIn, changeMouseIn, changePage } = this.props;
        let newList = list.toJS();
        let pageList = [];
        for (let i = page * 10; i < (page + 1) * 10; i++) {
            if(i === newList.length){
                break;
            }
            pageList.push(<SearchInfoItem key={Math.random()}>{newList[i]}</SearchInfoItem>)
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={() => changeMouseIn(true)} onMouseLeave={() => changeMouseIn(false)}>
                    <SearchInfoTitle>
                        热门搜索
                <SearchInfoSwitch onClick={() => changePage(page, totalPage)}><i><img src={spin} width="14px" alt="图片"/></i> 换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList >
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['headerState', 'focused']),
        list: state.getIn(['headerState', 'list']),
        page: state.getIn(['headerState', 'page']),
        totalPage: state.getIn(['headerState', 'totalPage']),
        mouseIn: state.getIn(['headerState', 'mouseIn'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeFocused: (val,list) => {
            (list.size === 0) && bindActionCreators(actions, dispatch).getList();
            bindActionCreators(actions, dispatch).changeFocused(val);
        },
        changeMouseIn: (val) => bindActionCreators(actions, dispatch).changeMouseIn(val),
        changePage: (page, totalPage) => {
            page++;
            if (page === totalPage) {
                page = 0;
            }
            bindActionCreators(actions, dispatch).changePage(page)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);