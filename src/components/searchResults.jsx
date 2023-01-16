import React from 'react';
import Question from './question';


export default class SearchResults extends React.Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    render() {
        const results = getHardCodedResults();
        return (
            <div className='search-results'>
                {results.map((question) => (
                    <div key={question.id}>
                        <Question {...question} />
                    </div>
                ))}
            </div>
        );
    }
}

function getHardCodedResults() {
    return [
        {
            id: "0",
            body: "Hardcoded question example",
            createdAt: "TIME CREATED",
            answers: [
                {
                    id: "1",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "2",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "3",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "4",
                    body: "Hardcoded Answer Example",
                },
            ],
        },
        {
            id: "1",
            body: "Hardcoded question example",
            createdAt: "TIME CREATED",
            answers: [
                {
                    id: "1",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "2",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "3",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "4",
                    body: "Hardcoded Answer Example",
                },
            ],
        },
        {
            id: "2",
            body: "Hardcoded question example",
            createdAt: "TIME CREATED",
            answers: [
                {
                    id: "1",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "2",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "3",
                    body: "Hardcoded Answer Example",
                },
                {
                    id: "4",
                    body: "Hardcoded Answer Example",
                },
            ],
        },
    ];
} 