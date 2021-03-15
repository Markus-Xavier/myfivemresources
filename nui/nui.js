let display = false;

RegisterCommand('nui', () => {
  setDisplay(!display);
});

RegisterNuiCallbackType('main');

on('__cfx_nui:main', (data) => {
  chat(data.text, data.color);
  setDisplay(false);
});

RegisterNuiCallbackType('error');

on('__cfx_nui:error', (data) => {
  chat(data.error, [255, 0, 0]);
  setDisplay(false);
});

RegisterNuiCallbackType('exit');

on('__cfx_nui:exit', (data) => {
  chat('Exited', [0, 255, 0]);
  setDisplay(false);
});

Wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

setTick(async () => {
  while (display) {
    DisableControlAction(0, 1, display); // LookLeftRight
    DisableControlAction(0, 2, display); // LookUpDown
    DisableControlAction(0, 142, display); // MeleeAttackAlternate
    DisableControlAction(0, 18, display); // Enter
    DisableControlAction(0, 322, display); // ESC
    DisableControlAction(0, 106, display); // VehicleMouseControlOverride
    await Wait(1);
  }
});

const setDisplay = (bool) => {
  display = bool;
  SetNuiFocus(bool, bool);
  SendNuiMessage(
    JSON.stringify({
      type: 'ui',
      status: bool,
    })
  );
};

const chat = (message, color) => {
  const cWhite = [255, 255, 255];
  emit('chat:addMessage', {
    color: color || cWhite,
    multiline: true,
    args: [message],
  });
};
