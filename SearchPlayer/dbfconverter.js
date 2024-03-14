const { Dbf } = require('dbf-reader');
const fs = require('fs');

let buffer = fs.readFileSync('TARATSUP.DBF');
let datatable = Dbf.read(buffer);

if (datatable) {
    let output = '';

    datatable.rows.forEach((row) => {
        datatable.columns.forEach((col) => {
            output += `${row[col.name]}\t`; // Assuming you want to separate values with tabs
        });
        output += '\n'; // Add a new line after each row
    });

    fs.writeFile('output.txt', output, (err) => {
        if (err) throw err;
        console.log('Data written to output.txt');
    });
}

