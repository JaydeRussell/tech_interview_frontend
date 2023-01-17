import "./searchPagination.css"

import React from "react";
import Pagination from 'react-bootstrap/Pagination';

export default function SearchPagination(props) {
    const {
        currentPage,
        numPages,
        onPageChange,
    } = props;

    let items = [];
    for (let i = 1; i <= numPages; i++) {
        items.push(
            <Pagination.Item className="page" key={i} active={i == currentPage} onClick={() => onPageChange(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return <Pagination className="pagination">{items}</Pagination>;
}