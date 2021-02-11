Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const color = {
    r: 247,
    b: 223,
    g: 88,
    a: 255
};

setTick(async () => {
    while(true){
        //The Text
        SetTextFont(1);
        SetTextScale(1.0, 1.0);
        SetTextColour(color.r, color.b, color.g, color.a);
        BeginTextCommandDisplayText('STRING');
        AddTextComponentSubstringPlayerName('A Happy Rat\'s Test Server!')
        EndTextCommandDisplayText(0.0001, 0.0001);
        
        //Rectangle
        // DrawRect(0.5, 0.0, 0.2, 0.05, 66, 134, 244, 245);
        await Wait(1);
    }
})