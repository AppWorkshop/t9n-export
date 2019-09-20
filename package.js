Package.describe({
  name: 'appworkshop:t9n-export',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Export the T9n global from npm version of meteor-accounts-t9n',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AppWorkshop/t9n-export.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'meteor-accounts-t9n':'2.5.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1');
  api.use(['ecmascript','tracker','standard-app-packages'],['client']);
  api.mainModule('t9n-export.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('t9n-export');
  api.mainModule('t9n-export-tests.js');
});
