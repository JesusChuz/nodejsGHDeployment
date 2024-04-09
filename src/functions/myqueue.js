const { app } = require('@azure/functions');

app.storageQueue('myqueue', {
    queueName: 'js-queue-items',
    connection: 'ConntoQueue',
    handler: (queueItem, context) => {
        context.log('Storage queue function processed work item:', queueItem);
    }
});
