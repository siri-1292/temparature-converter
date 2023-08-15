function convertTemperature(type) {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');

    if (type === 'celsius') {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
    } else if (type === 'fahrenheit') {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        var celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
    }
}

