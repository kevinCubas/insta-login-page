const allImages = document.querySelector('#allImages')

let index = 0

function displayImage() {
  const images = allImages.querySelectorAll('img')
  images.forEach(img => img.classList.remove('active-visibility'))
  index = index + 1 === images.length ? 0 : index + 1
  images[index].classList.add('active-visibility')
}

setInterval(displayImage, 4000)
