let scannerOn = false;

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        btn.innerText = "CANCEL";
        startScanner();
    } else {
        btn.innerText = "SCAN";
        stopScanner(); 
    }
}

function startScanner() {
    mapContainer.style.display = "none";
    reader.start(
        { facingMode: "environment" },
        {},
        (text) => {
            const place = places[text];
            if (place) {
                showMarkerAt(place);
                toggleScanner();
            } else {
                console.error("Invalid");
            }
        }
    )
    .catch((err) => {
        console.error("Error starting scaner: ", err);
        toggleScanner();
    });
}

function stopScanner() {
    try {
        reader.stop();
    } catch(err) {}
}