const argv = require("yargs").
    command('create',
    'Create a new task',
    {
        id: {
            demand: true,
            alias: 'i',
            desc: 'Task id'
        },
        task: {
            demand: true,
            alias: 't',
            desc: 'Task description'
        }
    })
    .command('list',
    'List current tasks',
    {
        id: {
            alias: 'i',
            desc: 'Show the task attached to that id'
        },
        
        all: {
            alias: 'a',
            desc: 'show all the tasks created. Write true to list them',
        },
  
        status: {
            alias: 's',
            desc: 'write True to show all the completed task, or false to non completed (pending)',
        },
    })
    .command('update',
        'Update the status of current tasks',
    {
        id: {
            demand: true,
            alias: 'i',
            desc: 'Task id'
        },
        completed: {
            demand: true,
            default: true,
            alias: 'c', 
            desc: 'Mark as completed or not a task'        
        }
        })
        .command('delete',
            'delete current tasks',
        {
            id: {
                alias: 'i',
                desc: 'delete the task with the inserted id',
            },
            all: {
                default: false,
                alias: 'a', 
                desc: 'delete all the tasks'        
            },
            finish: {
                demand: true,
                alias: 'f', 
                desc: 'Are you sure to delete the task/tasks ?'        
            }
        })
    .help()
    .argv;
    
    
module.exports = {
    argv
}
  