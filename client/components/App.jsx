import React from 'react';

import TablesStore from '../stores/TablesStore';
import TablesActions from '../actions/TablesActions';

import TablesEditor from './TablesEditor.jsx';
import TablesGrid from './TablesGrid.jsx';
import Table from'./Table.jsx';

import './App.less';

function getStateFromFlux() {
	return{
		isLoading: TablesStore.isLoading(),
		tables: TablesStore.getTables()
	};
}

const App = React.createClass({
	getInitialState() {
		return getStateFromFlux(); 
	},

	componentWillMount() {
		TablesActions.loadTables();
	},

	componentDidMount() {
		TablesStore.addChangeListener(this._onChange);
	},
	
	componentWillUnount() {
			TablesStore.removeChangeListener(this._onChange);
	},


	handleTableAdd(data){
		TablesActions.createTable(data);
	},

	handleTableDelete(data){ 
		TablesActions.deleteTable(data.id);
	},

	render(){
		return (
			<div className='App'>
				<h2 className='App__header'>TablesApp</h2>
				<TablesEditor onTableAdd={this.handleTableAdd} />

				<TablesGrid tables={this.state.tables} onTableDelete={this.handleTableDelete} />

			</div>
		);
	},


	_onChange() {
		this.setState(getStateFromFlux());
	}
});

export default App;