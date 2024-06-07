const express = require('express');

const accountRoutes = require('./routes/accountRouter');

const app = express();

app.use(express.json());

const port = 3000;

app.use('/api/razorpay', accountRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
