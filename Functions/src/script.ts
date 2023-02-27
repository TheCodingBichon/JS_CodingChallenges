// Coding challenge #1

//Input

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer: number = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    answer < this.answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); //musimy użyć bind ponieważ w przeciwnym razie słowo this. będzie wskazywać na przycisk (element, który go wywołuje), a nie na obiekt poll

poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //używamy metody call aby ręcznie ustawić słowo kluczowe this na nowy opiekt

//Coding challenge #2

//Input
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
