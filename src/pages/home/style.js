import styled from "styled-components"

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-right:15px;
    border-bottom:1px solid #ccc;
    
`
export const TopicItem = styled.div`
    height:32px;
    line-height:32px;
    font-size:14px; 
    float:left;
    cursor:pointer;   
    border:1px solid #dcdcdc;
    border-radius:6px;
    padding-right:10px;
    margin-left:18px;
    overflow:hidden;
    background:#f7f7f7;
    margin-bottom:15px;
    img{
        height:100%;
        float:left;
        margin-right:15px;
    }
`
export const ArticalWrapper = styled.div`
    padding:15px 15px;
    overflow:hidden;
    border-bottom:1px solid #ccc;
    h3{
        font-size:18px;
        margin:0;
        margin-bottom:15px;
    }
    img{
        width:125px;
        height:100px;
        float:right;
        border-radius:5px;
    }

` 
export const ArticalList = styled.div`
    float:left;
    width:450px;
    .artical{
        font-size:12px;
        color:#999;
        line-height:24px;
    }

`
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=> props.imgUrl}) no-repeat;
    background-size:contain;
`
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    margin:15px 0;
    cursor:pointer;
    user-select:none;
`
export const ToTop = styled.div`
    position:fixed;
    bottom: 100px;
    right:100px;
    width:100px;
    line-height:50px;
    text-align:center;
    height:50px;
    background:#ccc;
`