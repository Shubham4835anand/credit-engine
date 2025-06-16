import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import creditRoutes from './src/routes/creditRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', creditRoutes);

app.get('/', (req, res) => {
  res.redirect('/enroll.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
