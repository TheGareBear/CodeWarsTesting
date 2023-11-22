// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

function greet(name = "world") {
    return `hello ${name}!`;
}  
  
// This would not pass tests but was a more elaborate version.
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
  
  function greet() {
    const greetings = [
      "Hello", 
      "Hola", 
      "Bonjour", 
      "Ciao", 
      "Hallo", 
      "Namaste", 
      "Salam", 
      "Aloha"
    ];
  
    const adjectives = [
      "Amazing", 
      "Awesome", 
      "Brilliant", 
      "Creative", 
      "Fantastic", 
      "Innovative", 
      "Spectacular", 
      "Wonderful"
    ];
  
    const punctuation = [
      "!", 
      "!!", 
      "!!!", 
      " :)", 
      " :-)", 
      " ;)", 
      " :D", 
      " ^_^"
    ];
  
    const randomGreeting = getRandomElement(greetings);
    const randomAdjective = getRandomElement(adjectives);
    const randomPunctuation = getRandomElement(punctuation);
  
    return `${randomGreeting}, ${randomAdjective} World${randomPunctuation}`;
  }

  console.log(greet());