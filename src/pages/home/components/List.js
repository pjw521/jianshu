import React from 'react'
import { ArticalList, ArticalWrapper,LoadMore } from '../style.js'
import { connect } from "react-redux";
import * as actions from "../store/actions.js"
import {Link} from "react-router-dom"


class List extends React.PureComponent {
  render() {
    const { articalList,page } = this.props;
    return (
      <div>
        {
          articalList.map((item,index) => {
            return (
              <Link key={index} to="/detail/1">
                  <ArticalWrapper >
                  <ArticalList>
                    <h3>{item.get('title')}</h3>
                    <div className="artical">
                    {item.get('artical')}
                    </div>
                  </ArticalList>
                  <img src={item.get('imgUrl')} alt="图片" />
              </ArticalWrapper>
              </Link>
            )
          })
        }
        <LoadMore onClick={()=>this.props.getMore(page)}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    articalList: state.getIn(['homeState', 'articalList']),
    page:state.getIn(['homeState', 'page'])
  }
}
const mapDispatch = (dispatch) => ({
    getMore(page){
      dispatch(actions.getMoreArtical(page));
    }
}) 
export default connect(mapState, mapDispatch)(List);
