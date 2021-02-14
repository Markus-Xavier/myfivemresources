RegisterCommand('annouce', (source, args) => { 
    emitNet('annouce', args.join(' '));
})

RegisterNetEvent('no-perms');

on('no-perms', () =>{
    console.log(source);
    emit('chat:addMessage', '[Error]', [255, 0, 0], 'You don\'t have permission to do that');
})