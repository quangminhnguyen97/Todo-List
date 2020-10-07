import React, { Component } from 'react';
import Item from './Item';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() { 
        const {items, onClickDelete} = this.props;
        const elmItems = items.map( (item, index) => 
            <Item
                onClickEdit={this.props.onClickEdit}
                onClickDelete={onClickDelete} 
                key={index}
                item={item}
                num={index}
            />
            )
        return  (
                <div className="panel panel-success">
                    <div className="panel-heading"> List Task</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Level</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elmItems}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default List;