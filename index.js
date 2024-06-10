// Task 1:
const carListItems = document.querySelectorAll('#car-list li');
carListItems.forEach(item => {
  item.style.color = 'blue';
});

const newCarItem = document.createElement('li');
newCarItem.textContent = 'Ferrari';
document.getElementById('car-list').appendChild(newCarItem);

// Task 2a:
function oddListElements() {
  const bookItems = document.querySelectorAll('#book-list li');
  bookItems.forEach((item, index) => {
    if (index % 2 !== 0) {
      item.style.backgroundColor = 'lightblue';
    }
  });
}
oddListElements();

// Task 2b:
function changeBookTitle(orderedList, oldTitle, newTitle) {
  const items = orderedList.querySelectorAll('li');
  items.forEach(item => {
    if (item.textContent === oldTitle) {
      item.textContent = newTitle;
    }
  });
}
const bookList = document.getElementById('book-list');
changeBookTitle(bookList, "Lord of the Flies", "The Alchemist");

// Task 2c:
function removeBook(orderedList, bookTitle) {
  const items = orderedList.querySelectorAll('li');
  items.forEach(item => {
    if (item.textContent === bookTitle) {
      orderedList.removeChild(item);
    }
  });
}
removeBook(bookList, "The Catcher in the Rye");

// Task 3:
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
];

const quizContainer = document.getElementById('quiz-container');

quizData.forEach((quizItem, index) => {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const questionTitle = document.createElement('h3');
  questionTitle.textContent = `${index + 1}. ${quizItem.question}`;
  questionDiv.appendChild(questionTitle);

  quizItem.options.forEach(option => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question${index}`;
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    questionDiv.appendChild(label);
    questionDiv.appendChild(document.createElement('br'));
  });

  quizContainer.appendChild(questionDiv);
});
