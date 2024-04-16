import express from "express";



// Importing routes
import userRoutes from './routes/user.js'

const port = 4000;
const app = express();

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
