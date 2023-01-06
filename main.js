const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    changeAbout(id);
  });
});

const changeAbout = (id) => {
  btns.forEach((btn) => {
    btn.classList.remove('active');
    if (btn.dataset.id === id) {
      btn.classList.add('active');
    }
  });
  contents.forEach((content) => {
    content.classList.remove('active');
    if (content.id === id) {
      content.classList.add('active');
    };
  });
};