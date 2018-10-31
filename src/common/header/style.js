import styled from "styled-components"
import logo from "../../statics/logo.png"



export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom:solid 1px #f0f0f0;
    position:relative;
`
export const Logo = styled.div`
    position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logo});
	background-size: contain;
`
export const Nav = styled.nav`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`
export const NavItem = styled.nav`
    line-height:56px;
    padding:0 15px;
    font-size:#333; 
    font-size:17px;
    &.left{
        float:left
    }
    &.right{
        float:right
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    user-select:none;
    position:relative;
    float: left;
    cursor:pointer;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#ccc;;
            color:white;
        }
    }
` 
export const SearchInfo = styled.div`
    position:absolute;
    width:240px;
    height:200px;
    background:#fff;
    left:0;
    top:56px;
    padding:0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);

`
export const SearchInfoTitle = styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color:#969696;
`
export const SearchInfoSwitch = styled.div`
	line-height:20px;
	font-size:14px;
    float:right;
	color:#969696;
`
export const SearchInfoList = styled.div`
`
export const SearchInfoItem = styled.div`
    display:block;
    float:left;
    line-height:20px;
    padding: 0 5px;
    margin-right:10px;
    margin-bottom:15px;
    font-size:12px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:2px;
`

export const NavSearch = styled.input.attrs({placeholder:"搜索"})`
   width:160px;
   height:38px;
   border:none;
   box-sizing:border-box;
   border-radius:19px; 
   outline:none;
   margin-top:9px;
   padding:0 30px 0 20px;
   background:#eee;
   font-size:14px;
   color:#666;
   transition:all 0.3s linear;
   &::placeholder{
       color:#999;
   };
   &.focused{
       width:300px;
   }
`
export const Addition = styled.div`
   position:absolute;
   right:0;
   top:0;
   height:56px;
`
export const Button = styled.div`
   float:right;
   line-height:38px;
   margin-top:9px;
   border-radius:19px;
   margin-right:20px;
   font-size:14px;
   border:1px solid #ec6149;
   padding: 0 20px;
   &.reg{
       color:#ec6749;
   }
   &.write{
       color:#fff;
       background:#ec6149;
   }
`
