import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const TableSchema = new Schema({
	name: { type: String },
	performance: { type: String},
	place: { type: String},
	date: { type: Date}
});

mongoose.model('Table', TableSchema);