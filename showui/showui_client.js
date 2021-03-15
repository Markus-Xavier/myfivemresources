RegisterCommand('on', () =>{
    setTick(async => {
        emit('nui:on', true);
    });
});

RegisterCommand('off', () =>{
    console.log('off');
    emit('nui:off', true);
    setTick(async => {
    });
});
