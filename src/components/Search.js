import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: '',
        }
        this.inputElement = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event) {
        this.setState({
            strSearch: event.target.value
        });
    }
    
    handleSearch(){
        this.props.onClickSearch(this.inputElement.current.value)
    }

    handleClear(){
        this.setState({
            strSearch: ''
        });
        this.props.onClickSearch('')
    }

    render() {
        let {strSearch} = this.state;
        return  (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input value={strSearch} onChange={this.handleChange} ref={this.inputElement} type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.handleSearch} type="button" className="btn btn-outline-success">Search!</button>
                        <button onClick={this.handleClear} type="button" className="btn btn-outline-danger">Clear</button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Search;