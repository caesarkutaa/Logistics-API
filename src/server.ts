import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Logistics API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
