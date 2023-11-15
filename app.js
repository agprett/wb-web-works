import express from 'express';
import morgan from 'morgan';
import nunjucks from 'nunjucks';

// Allows you to change the port number if needed
const port = '8000';

const app = express();

// Configure the Express app
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
