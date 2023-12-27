const express = require('express');
const router = express.Router();

// Static list of templates (for demonstration purposes)
const templates = [
  { id: 1, name: 'Template 1' },
  { id: 2, name: 'Template 2' },
  { id: 3, name: 'Template 3' },
];

// Route to retrieve a list of templates
router.get('/templates', (req, res) => {
  res.json(templates);
});

// Route to retrieve a specific template by ID
router.get('/templates/:id', (req, res) => {
  const templateId = parseInt(req.params.id);
  const template = templates.find((t) => t.id === templateId);
  if (!template) {
    res.status(404).json({ error: 'Template not found' });
  } else {
    res.json(template);
  }
});

// Route to create a new template (for demonstration purposes)
router.post('/templates', (req, res) => {
  const { name, content } = req.body;
  const newTemplate = { id: templates.length + 1, name, content };
  templates.push(newTemplate);
  res.json(newTemplate);
});

// Route to update an existing template by ID (for demonstration purposes)
router.put('/templates/:id', (req, res) => {
  const templateId = parseInt(req.params.id);
  const { name, content } = req.body;
  const templateIndex = templates.findIndex((t) => t.id === templateId);
  if (templateIndex === -1) {
    res.status(404).json({ error: 'Template not found' });
  } else {
    const updatedTemplate = { id: templateId, name, content };
    templates[templateIndex] = updatedTemplate;
    res.json(updatedTemplate);
  }
});

// Route to delete a template by ID (for demonstration purposes)
router.delete('/templates/:id', (req, res) => {
  const templateId = parseInt(req.params.id);
  const templateIndex = templates.findIndex((t) => t.id === templateId);
  if (templateIndex === -1) {
    res.status(404).json({ error: 'Template not found' });
  } else {
    templates.splice(templateIndex, 1);
    res.json({ message: 'Template deleted' });
  }
});

module.exports = router;