const player = GetPlayerPed(-1);

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

RegisterCommand('clear', removeWeapons);

