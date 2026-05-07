import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { contactRouter } from './routes/contact.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting for API endpoints to prevent abuse
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter);

// Routes
app.use('/api/contact', contactRouter);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Server is running securely.' });
});

app.listen(PORT, () => {
  console.log(`Server running securely on port ${PORT}`);
});
