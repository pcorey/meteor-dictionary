Package.describe({
    name: 'pcorey:dictionary',
    summary: 'Creates Dictionary collection populated with Webster\'s Unabridged English Dictionary.',
    version: '1.0.1',
    git: 'https://github.com/pcorey/meteor-dictionary.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.1');
    api.addFiles('dictionary.js');
    api.addFiles('dictionary.json', 'server', {isAsset: true});
});
