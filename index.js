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
  switch(string)
  case "string === string.toLowerCase":
    return ("I can\'t hear you!");
    break;
  case "string === string.toUpperCase":
    return ("YES INDEED!");
    break;
  case "string === I love you, Grandma.":
    return ("I love you, too.");
    break;
}
