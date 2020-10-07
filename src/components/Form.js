import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskID: '',
            taskName: '',
            taskLevel: 1
        };
        this.closeForm      = this.closeForm.bind(this);
        this.handleChange   = this.handleChange.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let item = this.props.itemSelected;
        if ( item !== null ) {
            console.log(item);
            if ( item.id !== '') {
                this.setState({
                    taskID: item.id,
                    taskName: item.name,
                    taskLevel: item.level
                })
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.currentRow !== state.lastRow) {
            let item = props.currentRow.itemSelected;
            if ( item !== null ) {
                return {
                    taskID: item.id,
                    taskName: item.name,
                    taskLevel: item.level
                };
            }
        }
        return null;
    }

    closeForm() {
        this.props.handleShowForm();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    
    handleSubmit(event) {
        let item = {
            taskID  : this.state.taskID,
            taskName: this.state.taskName,
            taskLevel:  this.state.taskLevel
        }
        this.props.handleAdd(item);
        event.preventDefault();
    }

    render() {
        return  (
            <div className="row">
                <div className="offset-md-7">
                    <form onSubmit={this.handleSubmit} className="form-inline">
                        <div className="form-group">
                            <input name="taskName" type="text" value={this.state.taskName} onChange={this.handleChange} className="form-control" placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <select name="taskLevel" value={this.state.taskLevel} onChange={this.handleChange} className="form-control" required="required">
                                <option value={0}>Low</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.closeForm} type="button" className="btn btn-secondary">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;