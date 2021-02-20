const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

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

exports.sendEmail = functions.firestore.document('emails/{emailID}')
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `softauthor1@gmail.com`,
      to: snap.data().email,
      subject: 'contact form message',
      html: `<h1>Order Confirmation</h1>
       <p> <b>Email: </b>${snap.data().email} </p>`
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
          console.log(error)
          return
      }
      console.log("Sent!")
    });
  })

// ===== ===== NODEMAILER BEG ===== =====

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: '********@gmail.com',
      pass: '************'
  }
});

// ===== ===== NODEMAILER END ===== =====