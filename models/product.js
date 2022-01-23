const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const Schema = mongoose.Schema;
const elasticsearch = require('elasticsearch');


const ProductSchema = new Schema({
  category: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category'
  },
  name: String,
  price: Number,
  image: String
});

const esClient = new elasticsearch.Client({host: 'localhost:9200'});
ProductSchema.plugin(mongoosastic, {
    esClient: esClient
  
});

module.exports = mongoose.model('Product', ProductSchema);
