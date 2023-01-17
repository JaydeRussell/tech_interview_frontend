import "./search.css"

import React from "react"
import { SearchHeader, SearchResults, SearchPagination } from '../components';

const defaultPageSize = 4;

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            page: 1,
            pageSize: defaultPageSize,
            results: [],
            totalFound: 0,
            isLoaded: false,
            error: "",
        };
    }

    componentDidMount() {
        this.fetchSearchResults("", 1, defaultPageSize)
    }

    // put this in a util package
    buildSearchQuery = (term, page, pageSize) => {
        return `search-term=${term}&page=${page}&page-size=${pageSize}&sort-type=created`
    }

    // TODO: put this in a reducer
    fetchSearchResults = (searchTerm, page, pageSize) => {
        const searchQuery = this.buildSearchQuery(searchTerm, page, pageSize);
        fetch(`http://localhost:9001/search?${searchQuery}`)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        searchTerm: res.searchTerm,
                        page: res.page,
                        pageSize: res.pageSize,
                        results: res.results,
                        totalFound: res.totalFound,
                        isLoaded: true,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error.message,
                    });
                }
            );
    }

    onSearchUpdate = (e) => {
        const {
            page,
            pageSize,
        } = this.state;
        this.fetchSearchResults(e.target.value, page, pageSize);
    }

    onPageChange = (newPage) => {
        const {
            searchTerm,
            pageSize,
        } = this.state;
        this.fetchSearchResults(searchTerm, newPage, pageSize);
    }

    render() {
        const {
            page,
            pageSize,
            results,
            totalFound,
            isLoaded,
            error,
        } = this.state;
        const maxPages = Math.ceil(totalFound / pageSize);
        return (
            <div className="search-page" >
                <SearchHeader onSearchUpdate={this.onSearchUpdate} />
                <SearchResults results={results} isLoaded={isLoaded} error={error} />
                <SearchPagination currentPage={page} numPages={maxPages} onPageChange={this.onPageChange} />
            </div>
        );
    }

}