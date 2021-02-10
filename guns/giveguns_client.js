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

const removeWeapons = () =>{
    const player = GetPlayerPed(-1);
    RemoveAllPedWeapons(player, true);
    notify('~r~Cleared All Weapons')
}

const h_key = 74

//Citizen.Wait()
Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const antiroll = () => {
    DisableControlAction(0, 22, true);
}

setTick(async () => {
    //console.log(IsControlPressed(0, 25))
    while (IsControlPressed(0, 25)) {
        emit('aimdownsights')
        //console.log('aiming')
        await Wait(5);
    }
    if (IsControlJustReleased(1, h_key)) {
        emit('h_key', ['weapon_Pistol', 'weapon_knife'])
    }
})

on('aimdownsights', antiroll)
on('h_key', giveWeapon)
RegisterCommand('clear', removeWeapons);

//SetPedUsingActionMode(player, false, -1, "DEFAULT_ACTION")