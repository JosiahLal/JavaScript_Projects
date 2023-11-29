

function openLightbox(imagePath) {
    var overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.style.display = 'flex';
    overlay.onclick = closeLightbox;

    var container = document.createElement('div');
    container.id = 'lightbox-container';
    container.style.maxWidth = '90%';  
    container.style.maxHeight = '90%'; 

    var closeBtn = document.createElement('span');
    closeBtn.id = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = closeLightbox;

    var image = document.createElement('img');
    image.id = 'lightbox-image';
    image.src = imagePath;
    image.alt = 'Lightbox Image';
    image.style.width = '100%'; 
    image.style.height = 'auto'; 

    container.appendChild(closeBtn);
    container.appendChild(image);
    overlay.appendChild(container);
    document.body.appendChild(overlay);
}
