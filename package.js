Package.describe({
  name: 'pcorey:dictionary',
  summary: 'Creates a MongoDB collection populated with Webster\'s Unabridged English Dictionary. JSON from https://github.com/adambom/dictionary',
  version: '1.0.0',
  git: 'https://github.com/pcorey/meteor-dictionary.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('dictionary.js');
  api.addFiles('dictionary.json', 'server', {isAsset: true});
});