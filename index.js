const data = {
  whoAmI: ['Developer', 'Artist'],
  isDeleting: false,
  txt: 'Test',
  index: 0,
};

const spanDOM = document.querySelector('.whoami');
let speed = 300;

const renderData = (charPos = 0) => {
  const index = data.index % data.whoAmI.length;
  if (data.txt === '' && data.isDeleting) {
    charPos = -1;
    data.txt = '';
    data.isDeleting = false;
    data.index++;
  }
  const fullText = data.whoAmI[index];

  if (!data.isDeleting && fullText !== data.txt) {
    data.txt = fullText.substring(0, charPos);
    charPos++;
    speed = 300;
    spanDOM.classList.remove('red');
    spanDOM.classList.add('green');
  } else if (data.isDeleting && data.txt !== '') {
    data.txt = fullText.substring(0, charPos);
    charPos--;
    speed = 200;
    spanDOM.classList.remove('black');
    spanDOM.classList.add('red');
  }

  if (fullText === data.txt) {
    data.isDeleting = true;
    speed = 1000;
    spanDOM.classList.remove('green');
    spanDOM.classList.add('black');
  }

  spanDOM.innerHTML = `<span>${data.txt}</span>`;

  setTimeout(() => {
    renderData(charPos);
  }, speed);
};

document.addEventListener(
  'DOMContentLoaded',
  (params) => {
    renderData();
  },
  false
);
