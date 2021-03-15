$(() => {
  const display = (bool) => {
    if (bool) {
      $('#container').show();
    } else {
      $('#container').hide();
    }
  };
  display(false);

  window.addEventListener('message', (event) => {
    console.log(Object.keys(event.data));
    const item = event.data;
    if (item.type === 'ui') {
      if (item.status == true) {
        display(true);
      } else {
        display(false);
      }
    }
  });

  document.onkeyup = (data) => {
    if (data.which == 27) {
      $.post('https://nui/exit', JSON.stringify({}));
      return;
    }
  };

  $('#close').click(() => {
    $.post('https://nui/exit', JSON.stringify({}));
    return;
  });

  $('#submit').click(() => {
    const inputValue = $('#input').val();
    if (inputValue.length >= 100) {
      $.post(
        'https://nui/error',
        JSON.stringify({
          error: 'Input was greater than 100',
        })
      );
      return;
    } else if (!inputValue) {
      $.post(
        'https://nui/error',
        JSON.stringify({
          error: 'There was no input',
        })
      );
      return;
    }
    $.post(
      'https://nui/main',
      JSON.stringify({
        text: inputValue,
      })
    );
    return;
  });
});
