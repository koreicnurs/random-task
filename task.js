const request = config => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    if (this.status >= 200 && this.status < 300) {
      config.success(JSON.parse(this.responseText));
    } else {
      config.error(this.status);
    }
  });

  xhr.addEventListener('error', () => {
    config.error('No Internet');
  });

  xhr.addEventListener('timeout', () => {
    config.error('Timeout');
  })

  xhr.open(config.method, config.url);

  xhr.send();
};