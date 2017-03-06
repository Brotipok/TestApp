import React from 'react';

import Table from './Table.jsx';
import Masonry from 'react-masonry-component';

import'./TablesGrid.less';

const TablesGrid = React.createClass({
	render() {
	        const masonryOptions = {
	            itemSelector: '.Table',
	            columnWidth: 250,
	            gutter: 10,
	            isFitWidth: true
	        };
	        return (
		            <Masonry
		                className='TablesGrid'
		                options={masonryOptions}
		            >
		            	                {
		                    this.props.tables.map(table =>
		                        <Table
		                            key={table.id}
		                            name={table.name}
		                            onDelete={this.props.onTableDelete.bind(null, table)}
		                        ><div>
		                            <p>{table.performance}</p>
		                            <p>{table.place}</p>
		                            <date>{table.date}</date>
		                            </div>
		                        </Table>
		                    )
		                }
		            </Masonry>
			)
		}
});

export default TablesGrid;

