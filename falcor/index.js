var falcor = require('falcor');
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');

var app = express();
var $ref = falcor.Model.ref;
var $atom = falcor.Model.atom;
var $error = falcor.Model.error;

var model = new falcor.Model({
  cache: {
    titlesById: {
      5212: {
        name: "Jessica Jones",
        rating: { $type: "atom", value: 5, $expires: -2000 },
        watched: true,
        bookmark: $error("Server is done"),
        subtitles: $atom["en", "fr"]
      },
      2343: {
        name: "Daredevil",
        rating: 4,
        watched: true,
        bookmark: null
      }
    },
    genreList: [
      {
        name: "Recently Watched",
        titles: [
          $ref("titlesById[5212]"),
          $ref("titlesById[2343]")
        ]
      },
      {
        name: "New Releases",
        titles: [
          $ref("titlesById[5212]")
        ]
      }
    ]
  }
});
// var model = {
//     titlesById: {
//       5212: {
//         name: "Jessica Jones",
//         rating: { $type: "atom", value: 5, $expires: -2000 },
//         watched: true,
//         bookmark: $error("Server is done"),
//         subtitles: $atom["en", "fr"]
//       },
//       2343: {
//         name: "Daredevil",
//         rating: 4,
//         watched: true,
//         bookmark: null
//       }
//     },
//     genreList: [
//       {
//         name: "Recently Watched",
//         titles: [
//           $ref("titlesById[5212]"),
//           $ref("titlesById[2343]")
//         ]
//       },
//       {
//         name: "New Releases",
//         titles: [
//           $ref("titlesById[5212]")
//         ]
//       }
//     ]
//   };

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return model.asDataSource();
}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);
