const popup = document.getElementById("popupGallery");
const mainImage = document.getElementById("mainImage");
const thumbContainer = document.getElementById("thumbnailContainer");

// open popup when clicking "see more"
document.querySelectorAll('.see_more').forEach(button => {
    button.addEventListener('click', () => {
        // get images from data-images attribute
        const images = button.getAttribute('data-images').split(',');

        // set first image as main
        mainImage.src = images[0];

        // clear old thumbnails
        thumbContainer.innerHTML = "";

        // create thumbnails dynamically
        images.forEach(img => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.classList.add('thumb');
            thumb.addEventListener('click', () => {
                mainImage.src = img;
            });
            thumbContainer.appendChild(thumb);
        });

        popup.style.display = "flex";
    });
});

// close popup
document.querySelector(".popup_gallery .close").addEventListener("click", () => {
    popup.style.display = "none";
});

// close on background click
popup.addEventListener("click", e => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
