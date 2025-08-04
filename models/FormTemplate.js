const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: String,
  label: String,
  type: String,
  options: [String],
  required: Boolean,
  conditionalOn: {
    field: String,
    value: mongoose.Schema.Types.Mixed,
  },
});

const SectionSchema = new mongoose.Schema({
  title: String,
  repeatable: Boolean,
  fields: [FieldSchema],
});

const FormTemplateSchema = new mongoose.Schema({
  title: String,
  sections: [SectionSchema],
});

module.exports = mongoose.model("FormTemplate", FormTemplateSchema);
