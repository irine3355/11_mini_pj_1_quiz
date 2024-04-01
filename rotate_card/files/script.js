document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.image');
    document.addEventListener('mousemove', function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const imageHalfWidth = image.clientWidth / 2;
      const imageHalfHeight = image.clientHeight / 2;
      const imageX = mouseX - imageHalfWidth;
      const imageY = mouseY - imageHalfHeight;
      image.style.transform = `translate(${imageX}px, ${imageY}px)`;
    });
  });