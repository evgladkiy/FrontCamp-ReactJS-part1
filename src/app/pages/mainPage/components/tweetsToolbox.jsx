import React, { Component } from 'react';

class TweetsToolbox extends Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        if (!this.props.shouldShowForm) {
            this.props.toggleForm();
        }
    }

    render() {
        return (
            <div>
                <div className="filter-container">
                    <i className="fas fa-search"></i>
                    <input
                      className="input"
                      type="search"
                      placeholder="Filter by author"
                      ref={(input) => { this.input = input; }}
                      onChange={() => this.props.filterTwits(this.input.value)}
                    />
                </div>
                <button className="btn" onClick={this.onClickHandler}>
                    <i className="fas fa-plus"></i>
                    Add new tweet
                </button>
            </div>
        );
    }
}

export default TweetsToolbox;
