const quotes = [
    {
      quote: "Do net try to be original, just try to be good",
      author: "Paul Rand",
    },
    {
      quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
      author: "Jim Rohn",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Being happy never goes out of style.",
      author: "Lilly Pulitzer",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Life is either a great adventure or nothing.",
      author: "Helen Keller",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    }
  ];
  
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;