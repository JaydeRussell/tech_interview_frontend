import React from 'react';
import Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    searchUpdate = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <Navbar>
                <Container>
                    <div className="project-header">
                        <input onChange={this.searchUpdate} className="search-bar" />
                        {/* <Button variant="secondary">Create New Question</Button> */}
                    </div>
                </Container>
            </Navbar>
        )
    }
}