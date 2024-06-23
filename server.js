const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/run', upload.single('code'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join('uploads', `${req.file.filename}.cpp`);

    // Rename the uploaded file to ensure it has the correct extension
    fs.rename(tempPath, targetPath, err => {
        if (err) return res.status(500).send({ error: err.message });

        const outputFilePath = path.join('uploads', `${req.file.filename}.out`);

        exec(`g++ ${targetPath} -o ${outputFilePath} && ${outputFilePath}`, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).send({ error: stderr });
            }
            res.send({ output: stdout });
        });
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
