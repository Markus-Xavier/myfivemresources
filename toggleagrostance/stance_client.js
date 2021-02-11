//Citizen.Wait()
Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const g_key = 58;
let testBool = false;

const changeStance = () =>{
    testBool = !testBool;
    const playerPed = GetPlayerPed(-1)
    SetPedUsingActionMode(playerPed, testBool, -1, "DEFAULT_ACTION")
     
}

setTick(async () => {
    const playerPed = GetPlayerPed(-1);
    if (IsControlJustReleased(0, g_key)) {
        emit('changeStanceAgro')
        await Wait(1);
        
    }
})

on('changeStanceAgro', changeStance);