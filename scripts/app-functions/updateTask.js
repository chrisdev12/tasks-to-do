const {saveDB, loadDB } = require('./dbWriteLoad');

//id referes to one particular task

const updateTask = (id,status) => {
    
    loadDB();
    
    let taskIndex = toDoList.findIndex(task => task.id === id);
    
    if (taskIndex >= 0) {
        toDoList[taskIndex].completed = status;
        saveDB(toDoList);
        return `Task: "${toDoList[taskIndex].task}" was updated `;
    } else {
        return `${id} doesnt have any task assigned`;
    } 
}
    
module.exports = {
    updateTask
}
