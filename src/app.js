require('./services/init_mongodb');
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const logger = require("morgan");
const routes = require('./routes')

// Thirt Party middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router level middlewares
app.use(routes);

// Error handling Middlewares
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
