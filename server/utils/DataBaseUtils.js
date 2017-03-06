import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

import '../models/Table';

import config from '../../etc/config.json';

const Table = mongoose.model('Table');

export function setUpConnection() {
	mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listTables(id) {
	return Table.find();
}

export function createTable(data) {
	const table = new Table({
		name: data.name ,
		performance: data.performance,
		place: data.place,
		date: data.date
	});
	return table.save();
}

export function deleteTable(id) {
	return Table.findById(id).remove();
}