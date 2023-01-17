import React from "react";
import Card from "react-bootstrap/Card"

export default function Answer(props) {
    const {
        id,
        body,
        createdAt,
    } = props;
    return (
        <Card className="answer">
            <Card.Body>
                <Card.Header className="answer-header">
                    <div>{createdAt} </div>
                </Card.Header>
                <Card.Text className="answer-body">{body}</Card.Text>
            </Card.Body>
        </Card>
    )
}