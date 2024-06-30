const express = require('express');
const bodyParser = require('body-parser');
const { auth } = require('./firebaseConfig');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      res.redirect('/dashboard');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.send(`Error: ${errorCode} - ${errorMessage}`);
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      res.redirect('/dashboard');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.send(`Error: ${errorCode} - ${errorMessage}`);
    });
});

app.post('/logout', (req, res) => {
  signOut(auth)
    .then(() => {
      res.status(200).send('Logout successful');
    })
    .catch((error) => {
      res.status(500).send('Error logging out');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
