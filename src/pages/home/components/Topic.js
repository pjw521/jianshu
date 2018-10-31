import React from 'react'
import { TopicWrapper, TopicItem } from '../style.js'
import { connect } from 'react-redux'

class Topic extends React.PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                <TopicWrapper>
                    {list.map((item) => {
                        return (
                            <TopicItem key={item.get("id")}>
                                <img src={item.get('imgUrl')} alt="图片"/> {item.get('title')}
                            </TopicItem>
                        )
                    })}
                </TopicWrapper>
            </div>
        )
    }
}
const mapState = (state) => {
    return{
        list: state.get('homeState').get('list')
    }
}
export default connect(mapState,null)(Topic)
