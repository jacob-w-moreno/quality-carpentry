const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((req, res) => {
  console.log('console.log helloWorld');
  res.json({result: 'WIN: helloWorld'});
});

exports.testFunction = functions.https.onCall((data, context) => {
  console.log('console.log testFunction');
  console.log('data:', data);
  return {
    status: 'complete',
    finished: true,
    error: false
  }
})