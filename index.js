const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/quiz', require('./routes/quiz'));
app.use('/auth', require('./routes/authenticate'));

app.listen(PORT, ()=> console.log(`Backend server started at ${PORT}`));