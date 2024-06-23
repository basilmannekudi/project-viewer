document.getElementById('run-code').addEventListener('click', () => {
    const code = document.getElementById('code-editor').value;
    const formData = new FormData();
    const blob = new Blob([code], { type: 'text/plain' });
    formData.append('code', blob, 'code.cpp');

    fetch('/run', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('terminal-output').innerText = data.error;
            } else {
                document.getElementById('terminal-output').innerText = data.output;
            }
        })
        .catch(error => {
            document.getElementById('terminal-output').innerText = `Error: ${error.message}`;
        });
});
