const {saveDB, loadDB } = require('./dbWriteLoad');

const deleteTask = (id, all, complete) => {
    
    if (complete) {
        
        loadDB();
        
        if (all) { 
            
            toDoList = [];
            saveDB(toDoList);
            return 'All task removed'   
            
        } else {           
            let newList = toDoList.filter(task => {
                return task.id !== id
            });
    
            if (newList.length !== toDoList.length) {
                saveDB(newList);
                return 'Task with that ID was eliminated'
            } else {
                return "ID of that task doesn't exist";
            }         
        }
        
    } else {
        return 'Tasks were not eliminated, if is a error, please send true in the parameter "finish"'
    }
    
}

module.exports = {
    deleteTask
}