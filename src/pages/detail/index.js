import React from "react"
import {withRouter} from "react-router-dom"


class Detail extends React.Component {
    render() {
        return (<div>
            我是Detail组件
        </div>)
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
    }
}
export default withRouter(Detail);