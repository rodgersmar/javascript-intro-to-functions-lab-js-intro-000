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
    return ('"I can\'t hear you!" if `string` is lowercase');
  } else {
    return ('"YES INDEED!" if `string` is uppercase');
  }
}
}
