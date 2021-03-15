const spawnPos = [-275.522, 6635.835, 7.425];

on('onClientGameTypeStart', () => {
  exports.spawnmanager.setAutoSpawnCallback(() => {
    exports.spawnmanager.spawnPlayer({
      x: spawnPos[0],
      y: spawnPos[1],
      z: spawnPos[2],
      model: 'a_m_m_skater_01'
    }, () => {
      emit('chat:addMessage', {
        args: [
          'Welcome to the party!~'
        ]
      })
    });
  });

  exports.spawnmanager.setAutoSpawn(true)
  exports.spawnmanager.forceRespawn()
});

Delay = (ms) => new Promise(res => setTimeout(res, ms));

RegisterCommand('car', async (source, args, raw) => {
    // account for the argument not being passed
    let model = "adder";
    if (args.length > 0)
    {
      model = args[0].toString();
    }
  
    
    const hash = GetHashKey(model);
    if (!IsModelInCdimage(hash) || !IsModelAVehicle(hash))
    {
      emit('chat:addMessage', {
        args: [`It might have been a good thing that you tried to spawn a ${model}. Who even wants their spawning to actually ^*succeed?`]
      });
      return;   
    }
  
    
    RequestModel(hash);
    while (!HasModelLoaded(hash))
    {
      await Delay(500);
    }
  
    const ped = PlayerPedId();
  
    
    const coords = GetEntityCoords(ped);
  
    
    const vehicle = CreateVehicle(hash, coords[0], coords[1], coords[2], GetEntityHeading(ped), true, false);
  
    
    SetPedIntoVehicle(ped, vehicle, -1);
  
    
    SetEntityAsNoLongerNeeded(vehicle);
    SetModelAsNoLongerNeeded(model);
  
    
    emit('chat:addMessage', {
      args: [`Woohoo! Enjoy your new ^*${model}!`]
    });
  }, false);

  

 
    const generateMarker = () => {
    DrawMarker(
        29,
        -275.522,
        6635.835,
        7.425 - 0.75,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        4.0,
        4.0,
        4.0,
        120,
        255,
        120,
        155,
        false,
        true,
        2,
        null,
        null,
        false
    );
}

setInterval(generateMarker,1);

AddTextEntry('MONEY', '~a~ Money')

const blip = AddBlipForCoord(-275.522, 6635.835);
SetBlipSprite(blip, 272);
SetBlipDisplay(blip,2);
SetBlipScale(blip,0.9);
BeginTextCommandSetBlipName("MONEY");
AddTextComponentSubstringPlayerName("");
EndTextCommandSetBlipName(blip);