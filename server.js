import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`\nEscutando na porta ${port}`);
  console.log(`CTRL + Click em http://localhost:${port}`);
});
