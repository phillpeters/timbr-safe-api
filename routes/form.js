const express = require("express");
const router = express.Router();

const FormTemplate = require("../models/FormTemplate");
const FormSubmission = require("../models/FormSubmission");

// Get form template (for rendering on frontend)
router.get("/template", async (req, res) => {
  const template = await FormTemplate.findOne();
  res.json(template);
});

// Submit form response
router.post("/submit", async (req, res) => {
  try {
    const submission = new FormSubmission(req.body);
    await submission.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
