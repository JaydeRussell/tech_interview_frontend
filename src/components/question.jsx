import React from "react";

import Answer from "./answer";
import Card from "react-bootstrap/Card";

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            body: props.body,
            createdAt: props.createdAt,
            answers: props.answers,
            showAnswers: false,
        };
    }

    toggleShowAnswers = () => {
        this.setState((state) => { return { showAnswers: !state.showAnswers } });
    }

    render() {
        const {
            id,
            body,
            createdAt,
            answers,
            showAnswers,
        } = this.state;
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Question Id: {id}</Card.Title>
                    <Card.Subtitle>Created: {createdAt}</Card.Subtitle>
                    <Card.Text>{body}</Card.Text>
                    <Card.Link onClick={this.toggleShowAnswers}>{showAnswers ? "hide answers" : "show answers"}</Card.Link>
                    <br />
                    {showAnswers &&
                        <Card.Footer>
                            {answers.map((answer) => <Answer key={answer.id} {...answer} />)}
                        </Card.Footer>
                    }
                </Card.Body>
            </Card>
        )
    }
}