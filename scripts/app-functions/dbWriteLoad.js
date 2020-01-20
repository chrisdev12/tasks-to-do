fs = require('fs');

const saveDB = (list) => {
    
    let data = JSON.stringify(list);
    
    fs.writeFile('db/data.json', data, (err) => {
    if (err) throw err;
    console.log('Task updated in your database');
    });  
}


const loadDB = () => {
    try {
        toDoList = require('../../db/data.json');
    } catch (error) {  
        toDoList = [];
    }
}

module.exports = {
    saveDB,
    loadDB
}