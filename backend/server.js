import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
connectDB();

app.use(cors({
  origin: true, // This allows ALL origins including your Vercel live URL
  credentials: true
}));
app.use(express.json());

app.use('/api', contactRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio API is Live! 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});