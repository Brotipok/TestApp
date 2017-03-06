import React from 'react';

import './TablesEditor.less';

const TablesEditor = React.createClass({
    getInitialState() {
        return {
			name: '',
			performance: '',
			place: '',
			date: ''
		};
    },

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    },

    handlePerformanceChange(event) {
        this.setState({ performance: event.target.value });
    },

    handlePlaceChange(event) {
        this.setState({ place: event.target.value });
    },

    handleDateChange(event) {
        this.setState({ date: event.target.value });
    },

    handleTableAdd() {
        const newTable = {
            performance: this.state.performance,
            name: this.state.name,
            place: this.state.place,
            date: this.state.date
        };

        this.props.onTableAdd(newTable);
        this.setState({ name: '', performance: '', place: '', date: '' });
    },

	render() {
		return (
			<div className='TablesEditor'>
				<input
					type='text'
					className='TablesEditor__name'
					placeholder='Enter artist name'
					value={this.state.name}
					onChange={this.handleNameChange}
				/>
				<textarea
					placeholder='Enter Artist concert performance'
					rows={5}
					className='TablesEditor__performance'
					value={this.state.performance}
					onChange={this.handlePerformanceChange}
				/>
				<input
					type='text'
					className='TablesEditor__place'
					placeholder='Enter concert place'
					value={this.state.place}
					onChange={this.handlePlaceChange}
				/>
				<input
					type='date'
					className='TablesEditor__date'
					value={this.state.date}
					onChange={this.handleDateChange}
				/>
				<div className='TablesEditor__footer'>
					<button
						className='TablesEditor__button'
						disabled={!this.state.name}
						onClick={this.handleTableAdd}
						>
						Add
					</button>
				</div>
			</div>
		);
	}
});


export default TablesEditor;