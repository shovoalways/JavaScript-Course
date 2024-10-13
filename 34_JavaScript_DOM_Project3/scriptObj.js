const randomQuotes = [
  {
    quote: 'Quality is not an act, it is a habit',
    author: 'Aristotle',
  },
  {
    quote:
      'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
    author: 'Norman Vincent Peale',
  },
  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    author: 'Charles R. Swindoll',
  },
  {
    quote: 'If you are going through hell, keep going.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
    author: 'Samuel Beckett',
  },
  {
    quote: 'With the new day comes new strength and new thoughts.',
    author: 'Eleanor Roosevelt',
  },
];

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

function autoQuote() {
  const quoteIndex = Math.floor(Math.random() * randomQuotes.length);
  // console.log(quoteIndex);
  quoteElement.textContent = randomQuotes[quoteIndex].quote;
  authorElement.textContent = randomQuotes[quoteIndex].author;
}
autoQuote();
button.addEventListener('click', autoQuote);
