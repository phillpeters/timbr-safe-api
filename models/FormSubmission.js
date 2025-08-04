const mongoose = require("mongoose");

const FormSubmissionSchema = new mongoose.Schema({
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: "FormTemplate" },
  submittedAt: { type: Date, default: Date.now },
  responses: mongoose.Schema.Types.Mixed,
  signature: {
    name: String,
    date: Date,
  },
});

module.exports = mongoose.model("FormSubmission", FormSubmissionSchema);
