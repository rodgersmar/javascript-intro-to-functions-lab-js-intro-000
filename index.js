function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  string = string.toUpperCase();
  console.log(string);
}

function logWhisper(string) {
  string = string.toLowerCase();
  console.log(string);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase) {
    return ('returns "I can\'t hear you!" if `string` is lowercase');
  } else {
  if (string === string.toUpperCase) {
    return ('returns "YES INDEED!" if `string` is uppercase');
  }
}
}
