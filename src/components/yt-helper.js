/* eslint-disable */
// credits: https://stackoverflow.com/a/8260383
export function getYtVideoId(url) {
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return "error";
  }
}

export function getYtEmbedUrl(url) {
  return "http://www.youtube.com/embed/" + getYtVideoId(url) + "?rel=0";
}

export function getYtThumbnailUrl(url) {
  return "https://img.youtube.com/vi/" + getYtVideoId(url) + "/0.jpg";
}
