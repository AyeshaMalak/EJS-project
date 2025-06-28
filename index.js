const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/about', (req, res) => {
  res.render('about', { message: "", tableData: [], num: null, limit: null });
});


app.post('/about', (req, res) => {
  const num = parseInt(req.body.num);
  const limit = parseInt(req.body.limit);
  let message = "";
  let tableData = [];

  if (!isNaN(num) && !isNaN(limit) && limit > 0) {
    message = `Table of ${num} up to ${limit}`;
    for (let i = 1; i <= limit; i++) {
      tableData.push({ i, result: num * i });
    }
  } else {
    message = "Please enter a valid number and limit.";
  }

  res.render('about', { message, tableData, num, limit });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
