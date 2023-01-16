import React from "react";

export default class Answer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            body: props.body,
        };
    }

    render(){
        const {
            body,
        } = this.state;
        return(
            <div>{body}</div>
        )
    }
}