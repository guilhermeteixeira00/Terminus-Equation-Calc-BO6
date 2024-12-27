let xValue = null;
let yValue = null;
let zValue = null;

function selectVariable(variable, value) {
    if (variable === 'x') {
        xValue = value;
    } else if (variable === 'y') {
        yValue = value;
    } else if (variable === 'z') {
        zValue = value;
    }


    updateImageSelection(variable, value);

    if (xValue !== null && yValue !== null && zValue !== null) {
        calculateResults();
    }
}

function updateImageSelection(variable, value) {

    const allImages = document.querySelectorAll(`#${variable}-variables img`);
    allImages.forEach(img => img.classList.remove('selected'));


    const selectedImage = document.querySelector(`#${variable}-variables img[alt="Value ${value}"]`);
    if (selectedImage) {
        selectedImage.classList.add('selected');
    }
}

function calculateResults() {
    const result1 = (xValue * 2) + 11;
    const result2 = ((zValue * 2) + yValue) - 5;
    const result3 = (zValue + yValue) - xValue;

    document.getElementById('result1').innerHTML = `1° Numero: <strong style="color:snow;">${result1}</strong>`;
    document.getElementById('result2').innerHTML = `2° Numero: <strong style="color:snow;">${result2}</strong>`;
    document.getElementById('result3').innerHTML = `3° Numero: <strong style="color:snow;">${Math.abs(result3)}</strong>`;
}
function removeBanner() {
    const banner = document.querySelector('.donation-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault(); // Impede o menu de contexto de aparecer
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Impede o menu de contexto de aparecer
});