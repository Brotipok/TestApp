
import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listTables() {
        return axios.get(`${apiPrefix}/tables`);
    },

    createTable(data) {
        return axios.post(`${apiPrefix}/tables`, data);
    },

    deleteTable(tableId) {
        return axios.delete(`${apiPrefix}/tables/${tableId}`);
    }
}