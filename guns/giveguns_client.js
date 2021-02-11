const playerid = PlayerId();

const alert = (msg) =>{
    BeginTextCommandDisplayHelp('STRING');
    AddTextComponentSubstringPlayerName(msg);
    EndTextCommandDisplayHelp(0,0,1,-1);
}

const notify = (msg) =>{
    BeginTextCommandThefeedPost('STRING');
    AddTextComponentSubstringPlayerName(msg);
    EndTextCommandThefeedPostTicker(true,false);
}

const giveWeapon = (weapons) => {
    const player = GetPlayerPed(-1);
    weapons.forEach(weapon => {
        notify(`Player given weapon ${weapon.substring(7).toUpperCase()}`)
        GiveWeaponToPed(player, GetHashKey(weapon), 999, false, false)
    });    
}

const weaponComponent = (weaponHash, component) =>{
    if (HasPedGotWeapon(GetPlayerPed(-1), GetHashKey(weaponHash), false)){
        GiveWeaponComponentToPed(GetPlayerPed(-1), GetHashKey(weaponHash), GetHashKey(component));
    }
}

const removeWeapons = () =>{
    const player = GetPlayerPed(-1);
    RemoveAllPedWeapons(player, true);
    notify('~r~Cleared All Weapons')
}

const dieCommand = () =>{
    SetEntityHealth(PlayerPedId(), 0)
    notify('~r~You died.')
}

const antiroll = () => {
    DisableControlAction(0, 22, true);
}

const h_key = 74

let x = 10000;
let i = 0;

//Citizen.Wait()
Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));



setTick(async () => {
    //console.log(IsControlPressed(0, 25))
    while (IsControlPressed(0, 25)) {
        emit('aimdownsights')
        //console.log('aiming')
        await Wait(5);
    }
    if (IsControlJustReleased(1, h_key)) {
        emit('h_key', ['weapon_Pistol', 'weapon_knife', 'weapon_assaultrifle']);
            weaponComponent('weapon_Pistol', 'COMPONENT_AT_PI_SUPP_02');
    }
})



// setTick(async () => {
//     const player = GetPlayerPed(-1);
//     while (true){
//         SetPedUsingActionMode(player, true, -1, "DEFAULT_ACTION")
//         await Wait(1);
//     }
// })

on('aimdownsights', antiroll)
on('h_key', giveWeapon)
RegisterCommand('clear', removeWeapons);
RegisterCommand('die', dieCommand);

// SetPedUsingActionMode(player, false, -1, "DEFAULT_ACTION")