// SCROLL TO SECTION
function scrollToSection() {
  const menuItems = document.querySelectorAll('.header .header__menu li a');
  const heightHeader = document.querySelector('header').offsetHeight;

  menuItems.forEach((item) =>
    item.addEventListener('click', function (event) {
      event.preventDefault();

      // Lấy giá trị của Href
      // const attrHref = item.getAttribute('href');
      const attrHref = event.target.getAttribute('href');

      // Dùng hàm window.scrollTo
      window.scrollTo({
        top: document.querySelector(attrHref).offsetTop - 10,
        behavior: 'smooth',
      });

      // Trước khi add class "active" phải remove tất cả các class "active" của item khác
      removeClassActive();

      // Add class "active" để menuItem đổi màu vàng
      item.classList.add('active');
    })
  );
  // Function remove class "active"
  function removeClassActive() {
    menuItems.forEach((item) => item.classList.remove('--active'));
  }

  // Active Menu khi Scroll tới Section đó
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    sections.forEach((section, index) => {
      let scrollY = window.scrollY;
      let sectionTop = section.offsetTop - heightHeader;
      let sectionHeight = section.offsetHeight;

      // Điều kiện để khung hình nằm trong section -> Có class "active"
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        removeClassActive();
        menuItems[index].classList.add('--active');
        // menuItems.forEach((item) => item.classList.add('active'));
      }
    });
  });
}
scrollToSection();
// ---------------------------------------------------------------------

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
