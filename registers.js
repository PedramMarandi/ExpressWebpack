export function registerConfigs(app, config, name = '') {
  let configKey;
  let itemCount = 0;
  name.length > 0 ?  configKey = name : configKey = '';

  for (let item in config) {
    if (typeof config[item] == 'object') {
      itemCount = Object.keys(config[item]).length;
      configKey.length == 0 ? configKey = `${item}.` : configKey += `${item}.`;
      
      registerConfigs(app, config[item], configKey);
    } else {
      itemCount--;
      let keyName = configKey;

      configKey.length == 0 ? keyName = item : keyName += item;
      app.set(keyName, config[item]);
      itemCount == 0 ? configKey = '' : configKey;
    }
  }
}

export function registerLocal(app, locals) {
  app.locals = {...app.locals, ...locals}
} 