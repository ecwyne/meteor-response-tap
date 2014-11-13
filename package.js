Package.describe({
  name: 'ecwyne:response-tap',
  summary: 'Simple extensible wrapper for responseTap API',
  version: '0.0.5',
  git: 'https://github.com/ecwyne/meteor-response-tap'
});

Npm.depends({
	"response-tap": '0.0.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('rTap');
  api.addFiles('response-tap.js', ['server']);
});