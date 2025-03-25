const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require('cors');

const connectToDb = require('./config/db'); 
require("dotenv").config();
const app = express();
const port = 8000;

app.use(cors({
    origin: ["http://localhost:5173", "https://mailer-frontend-pearl.vercel.app"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDb();

app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
