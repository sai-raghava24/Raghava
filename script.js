document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item');
    images.forEach(image => {
        image.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);

            const img = document.createElement('img');
            img.src = image.src;
            lightbox.appendChild(img);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});