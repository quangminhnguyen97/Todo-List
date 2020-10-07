import React, {Component, Fragment} from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import {includes, filter, orderBy as funcOrderBy, remove} from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
    class App extends Component{
        constructor(props) {
            super(props);
            this.state = {
                items: null,
                isShowForm: false,
                strSearch: '',
                orderBy: 'name',
                orderDir: 'asc',
                itemSelected: null
            }
            this.isShowForm = this.isShowForm.bind(this);
            this.handleSearch = this.handleSearch.bind(this);
            this.handleSort = this.handleSort.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
            this.handleAdd = this.handleAdd.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
        }

        componentDidMount(){
            let items = JSON.parse(localStorage.getItem('task'));
            this.setState({
                items: items,
            })
        }

        isShowForm(){
            this.setState({
                isShowForm: !this.state.isShowForm,
                itemSelected: null
            })
        }

        handleSearch(value){
            this.setState({
                strSearch: value.trim(),
            })
        }

        handleSort(orderBy, orderDir) {
            this.setState({
                orderBy: orderBy,
                orderDir: orderDir
            })
        }

        handleDelete(id) {
            let {items} = this.state;
            remove( items, (item) => {
                return item.id === id;
            });
            this.setState({ 
                items: items,
                isShowForm: false
            })
            localStorage.setItem('task', JSON.stringify(items));
        }

        handleAdd(item) {
            console.log(item);
            let {items} = this.state;
            if (item.taskID !== ''){ // Edit
                console.log('Edit');
                items.forEach( (elm, key) => {
                    if (  elm.id === item.taskID) {
                        items[key].name = item.taskName;
                        items[key].level = +item.taskLevel
                    }
                })
                this.setState({
                    items: items,
                    isShowForm: false
                })
            } 
            else { 
                // Add
                items.push({
                    id: uuidv4(),
                    name: item.taskName,
                    level: +item.taskLevel
                });
                this.setState({
                    items: items,
                    isShowForm: false
                })
            }
            localStorage.setItem('task', JSON.stringify(items));
        }

        handleEdit(item){
            this.setState({
                itemSelected: item,
                isShowForm: true
            })
        }

        render(){
            let itemsOrigin = this.state.items;
            let items = [];
            let {strSearch, orderBy, orderDir} = this.state;

            items = filter( itemsOrigin, (item) => {
                return includes(item.name.toLowerCase(), strSearch.toLowerCase());
            });
            
            items = funcOrderBy( items, [orderBy], [orderDir] );

            let {isShowForm} = this.state;
            let elmForm = null;
            if ( isShowForm === true ) {
                elmForm = <Form itemSelected={this.state.itemSelected} handleAdd={this.handleAdd} handleShowForm={this.isShowForm} />;
            }
            return (
                <Fragment>
                    <Title />
                    <Control
                        orderBy={orderBy}
                        orderDir={orderDir}
                        handleSort={this.handleSort}
                        onClickSearch={this.handleSearch}
                        handleShowForm={this.isShowForm}
                        isShowForm={isShowForm}
                    />
                    {elmForm}
                    <List
                        onClickEdit={this.handleEdit}
                        itemSelected={this.state.itemSelected}
                        onClickDelete={this.handleDelete}
                        items={items}
                    />
                </Fragment>
            );
        }
    }

export default App;