RegisterNetEvent('annouce');
on('annouce', (param) => {
    console.log('^7[^1Annoucment^7]^2' + param);
    emitNet('chatMessage', -1, '^7[^1Annoucment^7]^2', [0, 0, 0], param);
})