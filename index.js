// Seleziona tutte le immagini nella gallery
const immagini = document.querySelectorAll('.container img');

immagini.forEach(img => {
    // Salviamo il percorso originale (bianco e nero)
    const srcOriginale = img.src; 
    // Creiamo il percorso per quella colorata (aggiungendo _color prima dell'estensione)
    const srcColore = srcOriginale.replace('.png', 'COLORE.png');

    // Pre-caricamento dell'immagine colorata per evitare scatti bianchi
    const tempImg = new Image();
    tempImg.src = srcColore;

    // Quando il mouse entra
    img.addEventListener('mouseenter', () => {
        img.src = srcColore;
    });

    // Quando il mouse esce
    img.addEventListener('mouseleave', () => {
        img.src = srcOriginale;
    });
});