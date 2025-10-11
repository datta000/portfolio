const Project = require('../models/project');

// GET /api/projects
const getProjects = async (_req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /api/projects
const createProject = async (req, res) => {
    try {
        const created = await Project.create(req.body);
        res.status(201).json(created);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getProjects, createProject };
