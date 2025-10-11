const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    image: String,
    technologies: [String],
    link: String
});

// third parameter = exact collection name
const Project = mongoose.model('Project', projectSchema, 'project_data');

module.exports = Project;
