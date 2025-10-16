import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());

// test route
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on :${PORT}`));
