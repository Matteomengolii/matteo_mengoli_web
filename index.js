const immagini = document.querySelectorAll('.container img');

immagini.forEach(img => {
    const srcOriginale = img.src; 
    const srcColore = srcOriginale.replace('.png', 'COLORE.png');
    const tempImg = new Image();
    tempImg.src = srcColore;

    img.addEventListener('mouseenter', () => {
        img.src = srcColore;
    });
    
    img.addEventListener('mouseleave', () => {
        img.src = srcOriginale;
    });
});