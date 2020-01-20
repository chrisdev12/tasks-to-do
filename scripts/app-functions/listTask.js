const { loadDB } = require('./dbWriteLoad')


const showList = (id, listAll, listCompleted) => {
    
    loadDB();
    
    if (typeof id == 'number') {
        let idList = toDoList.filter(task => task.id === id);
        return idList;
    } 
    
    if (listAll) {
        return toDoList;
    }

    if (listCompleted === 'true') {
        let complete = toDoList.filter(task => task.completed === listCompleted);
        return complete;
    } else if (listCompleted === 'false') {
        console.log(listCompleted)
        let pending = toDoList.filter(task => task.completed === listCompleted);
        return pending;
    } else {
        throw new Error ('Invalid value')
    }
}

module.exports = {
    showList
}
