const player = GetPlayerPed(-1);
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

const giveWeapon = (hash) => {
    GiveWeaponToPed(player, GetHashKey(hash), 999, false, false)
}

const removeWeapons = () =>{
    RemoveAllPedWeapons(player, true);
    notify('~r~Cleared All Weapons')
}
const h_key = 74

//Citizen.Wait()
Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//Citizen.CreateThread
setTick(async () => {
    await Wait(1);
    if (IsControlJustReleased(1, h_key)) {
        giveWeapon('weapon_Pistol');
        giveWeapon('weapon_knife');
        alert("~b~Given Weapons with ~INPUT_VEH_HEADLIGHT~");
    }
})

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
})

on('aimdownsights', antiroll)
RegisterCommand('clear', removeWeapons);

//SetPedUsingActionMode(player, false, -1, "DEFAULT_ACTION")

