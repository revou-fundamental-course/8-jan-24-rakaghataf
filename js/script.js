document.addEventListener('DOMContentLoaded', function () {
    var squareSideInput = document.getElementById('squareSide');
    var hitungButton = document.getElementById('hitungButton');
    var resetButton = document.getElementById('resetButton');

    hitungButton.addEventListener('click', function () {
        var sisi = parseFloat(squareSideInput.value);
        if (isNaN(sisi) || sisi <= 0) {
            alert('Masukkan nilai sisi yang valid.');
            return;
        }
        
        var luas = sisi * sisi;
        var keliling = 4 * sisi;
        var resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = 'Luas Persegi: ' + luas + '<br>Keliling Persegi: ' + keliling;
    });

    resetButton.addEventListener('click', function () {
        squareSideInput.value = '';
        resultContainer.innerHTML = '';
    });
});
