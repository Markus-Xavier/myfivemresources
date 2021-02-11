const text = (content) =>{
    SetTextFont(2);
    SetTextScale(1.9, 1.9);
    BeginTextCommandDisplayText('STRING');
    AddTextComponentSubstringPlayerName(content);
    EndTextCommandDisplayText(0.0, 0.7);
}

const textZero = () =>{
    text('0');
}

Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//console.log(GetEntityModelGetVehiclePedIsIn(GetPlayerPed(-1), false))

console.log(GetEntityModel(GetVehiclePedIsIn(GetPlayerPed(-1), false)));


setTick(async () =>{
    while(true){
        await Wait(1);
        const speed = GetEntitySpeed(GetVehiclePedIsIn(GetPlayerPed(-1), false)) * 2.2369;
        
        if (GetEntityModel(GetVehiclePedIsIn(GetPlayerPed(-1), false))!== 1131912276){
            if(IsPedInAnyVehicle(GetPlayerPed(-1), false)){
                if(speed < 1 ){
                     text('0')
                } else {
                    text(Math.floor(speed));
                }
            }
        }
}})

// setTick(async() =>{
//     while(true){
//         await Wait(1);
//         const speed = GetEntitySpeed(GetVehiclePedIsIn(GetPlayerPed(-1), false)) * 2.2369

//         if(GetEntityModel(GetVehiclePedIsIn(GetPlayerPed(-1), false)) !== 1131912276){

//         }
//     }
// })



