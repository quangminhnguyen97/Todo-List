import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(orderBy, orderDir) {
        this.props.handleSort(orderBy, orderDir);
    }

    render() { 
        const {orderBy, orderDir} = this.props;
        let orderName = (`${orderBy} - ${orderDir}`).toUpperCase();
        return  (
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="btn-group">
                    <button type="button" className="btn btn-info dropdown-toggle sort-by" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort
                    </button>
                    <div className="dropdown-menu">
                        <a onClick={ () => this.handleSort('name', 'asc') } className="dropdown-item" href="#top">Name ASC</a>
                        <a onClick={ () => this.handleSort('name', 'desc') } className="dropdown-item" href="#top">Name DESC</a>
                        <div className="dropdown-divider" />
                        <a onClick={ () => this.handleSort('level', 'asc') } className="dropdown-item" href="#top">Level ASC</a>
                        <a onClick={ () => this.handleSort('level', 'desc') } className="dropdown-item" href="#top">Level DESC</a>
                    </div>
                    <button type="button" className="btn btn-primary"> <span className="badge">{orderName}</span></button>
                </div>
            </div>
        )
    }
}

export default Sort;