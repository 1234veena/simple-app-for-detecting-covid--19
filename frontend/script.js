document.getElementById('analyze-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('upload');
    const resultDiv = document.getElementById('result');

    if (fileInput.files.length === 0) {
        resultDiv.innerHTML = 'Please upload a CT scan image.';
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        resultDiv.innerHTML = 'Prediction: ' + JSON.stringify(data.prediction);
    })
    .catch(error => {
        resultDiv.innerHTML = 'Error analyzing image.';
        console.error('Error:', error);
    });
});
