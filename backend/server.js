const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const taskRoutes = require('./routes/tasks');
const noteRoutes = require('./routes/notes');
const scheduleRoutes = require('./routes/schedule');
const questionRoutes = require('./routes/questions');
const wordRoutes = require('./routes/words');
const authRoutes = require('./routes/auth');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/words', wordRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});