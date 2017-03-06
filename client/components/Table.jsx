import React from 'react';

import './Table.less';

const Table = React.createClass({
    render() {
        const style = { backgroundColor: this.props.color };
        return (
            <div className='Table' style={style}>
                <span className='Table__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.name
                    ?
                        <h4 className='Table__title'>{this.props.name}</h4>
                    :
                        null
                }
                <div className='Table__text'>{this.props.children}</div>
                <div className='Table__text'>{this.props.place}</div>
                <div className='Table__text'>{this.props.date}</div>
            </div>
        );
    }
});

export default Table;