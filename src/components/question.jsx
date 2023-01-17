import "./question.css"

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
            <Card className="question">
                <Card.Body>
                    <Card.Header className="question-header">
                        <div>{createdAt} </div>
                    </Card.Header>
                    <Card.Text>{body}</Card.Text>
                    {!!answers &&
                        <Card.Link className="show-answer-link" onClick={this.toggleShowAnswers}>{showAnswers ? "hide answers" : "show answers"}</Card.Link>
                    }
                </Card.Body>
                {showAnswers &&
                    <Card.Footer>
                        {!!answers &&
                            answers.map((answer) => <Answer key={answer.id} {...answer} />)
                        }
                    </Card.Footer>
                }
            </Card>
        )
    }
}