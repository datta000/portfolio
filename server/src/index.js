const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://portfolio-six-ruddy-ptws5urxvo.vercel.app'  // <-- replace with your actual Vercel URL
    ],
    credentials: true
}));
app.use(express.json());
// DB connect
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// Routes
const projectRoutes = require('./routes/project.routes');
app.use('/api/projects', projectRoutes);

const contactRoutes = require("./routes/contact.routes");
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));