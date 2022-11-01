import Awesome from './modules/Awesome.js';
import Books from './modules/Books.js';
import {
  addBtn,
  message,
  time,
  listLink,
  addNewLink,
  contactLink,
  seeList,
  sectionOne,
  sectionThree,
  sectionTwo,
  close,
} from './modules/selectors.js';
import * as Luxon from './modules/luxon.js';

const books = new Books();
books.getData();
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Awesome();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  books.add(book);
  message.classList.remove('display');
  setTimeout(() => message.classList.add('display'), 3000);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

listLink.addEventListener('click', () => {
  sectionOne.classList.remove('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.add('display');
});
addNewLink.addEventListener('click', () => {
  sectionOne.classList.add('display');
  sectionTwo.classList.remove('display');
  sectionThree.classList.add('display');
});
contactLink.addEventListener('click', () => {
  sectionOne.classList.add('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.remove('display');
});
seeList.addEventListener('click', () => {
  sectionOne.classList.remove('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.add('display');
  message.classList.add('display');
});
close.addEventListener('click', () => {
  message.classList.add('display');
});

setInterval(() => {
  const date = Luxon.DateTime.now().toLocaleString(Luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = `${date}`;
});
