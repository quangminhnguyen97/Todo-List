import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleDelete(id) {
        this.props.onClickDelete(id);
    }

    handleEdit(item) {
        this.props.onClickEdit(item);
    }

    render() {
        const {item} = this.props;
        const {num} = this.props;
        
        return  (
            <tr>
                <th scope="row">{num+1}</th>
                <td>{item.name}</td>
                <td>
                    {this.showLevelElm(item.level)}
                </td>
                <td>
                    <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-primary">Edit</button>
                    <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>                 
        )
    }
    showLevelElm(level) {
        let elmLevel = <span className="badge badge-secondary">Small</span>
        if (level === 1){
            elmLevel = <span className="badge badge-warning">Medium</span>;
        } else if (level === 2) {
            elmLevel = <span className="badge badge-danger">High</span>;
        }
        return elmLevel;
    }
}

export default Item;