function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')

}

function logWhisper(string) {
  console.log('hello')

}

function sayHiToGrandma(string) {
  switch(string){
  case string="hello": return "I can\'t hear you!"
  case string="HELLO": return "YES INDEED!"
  case string="I love you, Grandma.": return "I love you, too."
  }
}
