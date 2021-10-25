const express = require('express');
const redoc = require('redoc-express');
const app = express();
const port = 3000;
 
app.get('/downlaod-module',(req,res)=>{
  console.log("here iam");
  const file = `${__dirname}/docs/Closet.zip`;
  res.download(file); 
})

app.get('/docs/swagger.json', (req, res) => {
  res.sendFile('/docs/swagger.json', { root: '.' });
});
 
app.get(
  '/APIS/Docs',
  redoc({
    title: 'API Docs',
    specUrl: '/docs/swagger.json'
  })
);
 
 
app.get('/docs/BackendAPIs.json', (req, res) => {
  res.sendFile('/docs/BackendAPIs.json', { root: '.' });
});
 
app.get(
  '/backendApis',
  redoc({
    title: 'API Docs',
    specUrl: '/docs/BackendAPIs.json'
  })
);
app.listen(port, () => console.log(`listening on port ${port}!`));

