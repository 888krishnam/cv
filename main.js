document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  })
  function myFunction() {
    let element = document.body;
    element.classList.toggle("light");
  }