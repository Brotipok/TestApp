import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _tables = [];
let _loadingError = null;
let _isLoading = true;

    function dateTime(inputDate) {
        var year = inputDate.slice(0,4);
        var month = inputDate.slice(5,7);
        var day = inputDate.slice(8,10);
        if(month === '01') {
            month = 'January';
        } else if(month === '02') {
            month = 'February';
        } else if(month === '03') {
            month = 'March';
        } else if(month === '04') {
            month = 'April';
        } else if(month === '05') {
            month = 'May';
        } else if(month === '06') {
            month = 'June';
        } else if(month === '07') {
            month = 'July';
        } else if(month === '08') {
            month = 'August';
        } else if(month === '09') {
            month = 'September';
        } else if(month === '10') {
            month = 'October';
        } else if(month === '11') {
            month = 'November';
        } else if(month === '12') {
            month = 'December';
        }
        var date = (day+' '+month+' '+year);
        return(date);
    };

function formatTable(table) {

    if(table.date !== null) {
    var formatedDate = dateTime(table.date);
    }

    return {
        id: table._id,
        name: table.name,
        performance: table.performance,
        place: table.place,
        date: formatedDate
    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getTables() {
        return _tables;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_TABLES_REQUEST: {
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_TABLES_SUCCESS: {
            _isLoading = false;
            _tables = action.tables.map( formatTable );
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_TABLES_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});
export default TasksStore;