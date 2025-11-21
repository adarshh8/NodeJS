const fs = require('fs');
const filepath = "data.json";
const content = {
    name: "adarsh",
    section: "DT"
};

// Convert object to string before writing
fs.writeFile(filepath, JSON.stringify(content), 'utf-8', (err) => { 
    if (err) {
        console.log('Error in writing the file:', err);
        return;
    }
    console.log('File written successfully');

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            console.log('Error in reading the file:', err);
            return;
        }
        const data1 = JSON.parse(data);
        console.log('The file content is:', data1);
    });
});
