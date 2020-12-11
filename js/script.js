window.addEventListener('DOMContentLoaded', () => {

  const listParent = document.querySelector('.list'),
        listItem = document.querySelectorAll('.list__item'),
        contentItem = document.querySelectorAll('.content__item');

    function hideContent() {
      contentItem.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
      });

      listItem.forEach(item => {
        item.classList.remove('list__item_active');
      });
    }

  function showContent(i = 0) {
    contentItem[i].classList.add('show', 'fade');
    contentItem[i].classList.remove('hide');
    listItem[i].classList.add('list__item_active');
  }

  listParent.addEventListener('click', event => {
    let target = event.target;

    if (target && target.classList.contains('list__item')) {
      listItem.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showContent(i);
        }
      });
    }

  });

  hideContent();
  showContent();

  // Timer

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  

  function setClock(selector) {
    const timer = document.querySelector(selector),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timerTitles = timer.querySelectorAll('.timer__title'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = new Date();

      hours.textContent = getZero(t.getHours());
      minutes.textContent = getZero(t.getMinutes());
      seconds.textContent = getZero(t.getSeconds());
      // checkNumber(t);
    }

    // function checkNumber(time) {
    //   // if (time.getHours == 0 || time.getHours >= 5 && time.getHours <= 20) {
    //   //   timerTitles[0].textContent = 'часов';
    //   if (time.getHours == 20) {
    //     timerTitles[0].textContent = 'ЧАСОВ';
      
    //   } else if (time.getHours >= 2 && time.getHours <= 4 &&time.getHours >= 22 && time.getHours <= 24) {
    //     timerTitles[0].textContent = 'часа';
    //   } else {
    //     timerTitles[0].textContent = 'час';
    //   }
    //   console.log(time.getHours());
    // }
  }

  setClock('.timer');
});