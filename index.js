const { argv } = require('./scripts/config/argv')
const { create } = require('./scripts/app-functions/to-do')
const { showList } = require('./scripts/app-functions/listTask')
const { updateTask } = require('./scripts/app-functions/updateTask')
const { deleteTask } = require('./scripts/app-functions/deleteTask')
var colors = require('colors');

let command = argv._[0];

switch (command) {
    
    case 'create':
        let newTask = create(argv.task, argv.id);
        console.log(newTask);
            
        break;
    
    case 'list':
        let list = showList(argv.id, argv.all, argv.status);
        for (eachTask of list) {
            console.log('===== Tasks to do ====='.green)
            console.log(`id: ${eachTask.id}`.yellow)
            console.log(`Task: ${eachTask.task}`)
            console.log(`Completed: ${eachTask.completed}`);
            console.log('======================='.blue)           
        }
        break;
    case 'update':
        let update = updateTask(argv.id,argv.completed);
         console.log(update.red);
        break;
    
    case 'delete':
        let remove = deleteTask(argv.id, argv.all, argv.finish);
        console.log(remove);
        break;
    default:
        console.log('Command not recognized')
            
}