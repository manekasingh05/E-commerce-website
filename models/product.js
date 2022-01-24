const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const elasticsearch = require('elasticsearch');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  name: String,
  price: Number,
  image: String
});

const esClient = new elasticsearch.Client({host: 'localhost:9200'});
ProductSchema.plugin(mongoosastic, {
    esClient: esClient 
});

module.exports = mongoose.model('Product', ProductSchema);
