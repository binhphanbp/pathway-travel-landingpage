// PROGRESSBAR
const progressBar = () => {
  let progress = document.querySelector('.progressbar');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let percent =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progress.style.width = `${percent}%`;
  });
};
progressBar();
