// this file help for schema to th server side validation
const joi = require('joi');
module.exports.listingSchema = joi.object({
  listing: joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    role: joi.string().required(),
    location: joi.string().required(),
    country: joi.string().required(),
    image: joi.string().allow("", null),
  }).required,
});