import "./searchResults.css";

import React from 'react';
import Question from './question';
import Alert from 'react-bootstrap/Alert'


export default function SearchResults(props) {
    const {
        results,
        isLoaded,
        error,
    } = props;

    return (
        <>
            {!!isLoaded ?
                <div className='search-results'>
                    {!!error &&
                        <Alert variant='danger'>{error}</Alert>
                    }
                    {results?.map((question) => (
                        <div key={question.id}>
                            <Question {...question} />
                        </div>
                    ))}

                </div>
                :
                <div>loading...</div>
            }
        </>
    );
}