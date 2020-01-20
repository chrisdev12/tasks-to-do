const { saveDB, loadDB } = require('./dbWriteLoad');


//Validate that the task ID has not yet been created (already in use).
const validateId =  (id) => {
    
    loadDB();
    
    idList = [];
    
    toDoList.forEach(element => { 
        idList.push(element.id)      
    }
    );
       
    if (idList.includes(id)) {
        throw new Error('A task already was created with this ID');
    } else {
        return toDoList;
    }   
}


const create = (task, id) => {
      
    let list = validateId(id);
    
    let toDo = {
        task,
        completed: "false",
        id
        };

    list.push(toDo); 
    saveDB(list);    
    return toDo;                               
}


module.exports = {
    create
}