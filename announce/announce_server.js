RegisterNetEvent('annouce');

on('annouce', (param) => {
  console.log('Source:', source);
  console.log('GetPlayer', GetPlayerIdentifier(source, 0));
  console.log('NumPlayerID:', GetNumPlayerIdentifiers(source));
  if (IsPlayerAceAllowed(GetPlayerIdentifier(source, 0), 'administrator')) {
    console.log('^7[^1Annoucment^7]^2' + param);
    emitNet('chat:addMessage', -1, '^7[^1Annoucment^7]^2', [0, 0, 0], param);
  } else {
    console.log('else');
    emitNet('no-perms', source);
  }
});
