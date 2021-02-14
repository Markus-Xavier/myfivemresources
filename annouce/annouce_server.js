RegisterNetEvent('annouce');

on('annouce', (param) => {
    console.log(GetPlayerIdentifier(source, 0));
    console.log(source);
    if(IsPlayerAceAllowed(steamid, 'administrator')){
        console.log('^7[^1Annoucment^7]^2' + param);
    emitNet('chat:addMessage', -1, '^7[^1Annoucment^7]^2', [0, 0, 0], param);
    } else {
        emitNet('no-perms', source);
    }
})