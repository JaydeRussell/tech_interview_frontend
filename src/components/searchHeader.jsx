import "./searchHeader.css"

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function SearchHeader(props) {
    const {
        onSearchUpdate
    } = props;
    return (
        <Navbar>
            <Container>
                <div className="project-header">
                    <input onChange={onSearchUpdate} placeholder="search" className="search-bar" />
                </div>
            </Container>
        </Navbar>
    )
}