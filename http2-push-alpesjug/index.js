var path = require('path');

var parser = require('chrome-http2-log-parser');

parser(path.resolve(__dirname, './session.txt'), {
  reporters: [
    'html'
  ],
  // the resolution, in milliseconds, of the report
  interval: 20
}, function (err, data) {
  if (err) {
    throw err;
  }

  // an array of objects representing the records in the log
  //console.log(data.records);

  // an object with an property for each stream id; the value of
  // the property is an array of objects associated with the stream id,
  // in the order in which they appeared in the log
  //console.log(data.streams);

  // the output of the html reporter
  console.log(data.reports.html);
});