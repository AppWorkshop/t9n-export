import Tracker from 'meteor/tracker';

const T9n = (require('meteor-accounts-t9n')).T9n;
T9n.map('en', require('meteor-accounts-t9n/build/en'));
T9n.setTracker(Tracker);
Template.registerHelper('t9n', (x, params) => T9n.get(x, true, params.hash));

window.T9n = T9n;

module.exports = T9n;
