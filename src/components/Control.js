import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.isShowForm = this.isShowForm.bind(this);
    }

    isShowForm() {
        this.props.handleShowForm();
    }

    render() {
        const {orderBy, orderDir, handleSort} = this.props;
        let elmButtonForm = <button onClick={this.isShowForm} type="button" className="btn btn-primary btn-block">Add Task</button>;
        if ( this.props.isShowForm === true) {
            elmButtonForm = <button onClick={this.isShowForm} type="button" className="btn btn-success btn-block">Close form</button>;
        }
        return  (
            <div className="row">
                <Search onClickSearch = { this.props.onClickSearch }/>
                <Sort
                    handleSort={handleSort}
                    orderBy={orderBy}
                    orderDir={orderDir}
                />
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 offset-1">
                    {elmButtonForm}
                </div>
            </div>
        )
    }
}

export default Control;