var ytdl = require('..');
var url = 'http://vimeo.com/93491987';

ytdl.getInfo(url, function(err, data) {
    if (err) throw err;

    var format = data[data.length - 1].split(' - ');

    var video = {
      title       : data[0],
      id          : data[1],
      url         : data[2],
      thumbnail   : data[3],
      description : data.slice(4, data.length - 2).join('\n'),
      filename    : data[data.length - 2],
      itag        : parseInt(format[0], 10),
      resolution  : format[1]
    };

    console.log(err, data, video);
}
);
