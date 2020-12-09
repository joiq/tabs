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
});