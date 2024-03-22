document.getElementById("downloadButton").addEventListener("click", function() {
    var fileUrl = "assets/files/Nghia Le Software Engineer (1).pdf";// Link file css here
    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Nghia Le Software Engineer (1).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.addEventListener('DOMContentLoaded', function() {
  const slideImages = document.querySelectorAll('.slides img');
  const closeOverlay = document.querySelector('.close');

  slideImages.forEach((img, index) => {
      img.addEventListener('click', () => {
          showOverlay(index);
      });
  });

  closeOverlay.addEventListener('click', hideOverlay);

  function showOverlay(index) {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      const overlayImage = document.createElement('img');
      overlayImage.src = slideImages[index].src;
      overlay.appendChild(overlayImage);
      document.body.appendChild(overlay);
      overlay.style.display = 'flex';

      overlay.addEventListener('click', () => {
          overlay.style.display = 'none';
      });
  }

  function hideOverlay() {
      const overlay = document.querySelector('.overlay');
      overlay.style.display = 'none';
  }
});
