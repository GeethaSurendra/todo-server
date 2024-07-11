const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', authRoutes);
app.use('/api/todo', toDoRoutes);

mongoose.connect("mongodb+srv://thegeeth99:Mahadev99@cluster0.gukcpdk.mongodb.net/?appName=Cluster0").then(() => {
    console.log("DB Connected Successfully!");
}).catch(err => {
    console.log(process.env.DB_URL)
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});