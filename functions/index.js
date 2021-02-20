const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();
// const app = require('express')();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello world');
});

exports.getEmails = functions.https.onRequest((req, res) => {
  db
    .collection('emails')
    .get()
    .then(data => {
      let emails = [];
      data.forEach(doc => {
        emails.push(
          doc.data()
          // email: doc.data().email,
          // message: doc.data().message,
          // name: doc.data().name,
          // phone: doc.data().phone
        );
      })
      return res.json(emails);
    })
    .catch(err => console.error(err));
});

exports.createEmail = functions.https.onRequest((req, res) => {
  const newEmail = {
    email: req.body.email,
    message: req.body.message,
    name: req.body.name,
    phone: req.body.phone
  }

  db
    .collection('emails')
    .add(newEmail)
    .then(doc => {
      res.json({ message: `Email ${doc.id} sent successfully!`})
    })
    .catch(err => {
      res.status(500).json({ error: `Something went wrong... Please try again.` });
      console.error(err);
    })
});