import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const TableActions = {
    loadTables() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_TABLES_REQUEST
        });

        api.listTables()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_TABLES_SUCCESS,
                tables: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_TABLES_FAIL,
                error: err
            })
        );
    },

    createTable(table) {
        api.createTable(table)
        .then(() =>
            this.loadTables()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteTable(tableId) {
        api.deleteTable(tableId)
        .then(() =>
            this.loadTables()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default TableActions;