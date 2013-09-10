module('Ember.SimpleAuth.Session');

test('exists', function() {
  ok(Ember.Object.detect(Ember.SimpleAuth.Session), 'Ember.SimpleAuth.Session is an Ember.Object');
});

test('reads the authToken from sessionStorage when it is initialized', function() {
  var token = Math.random().toString(36);
  sessionStorage.authToken = token;
  var session = Ember.SimpleAuth.Session.create();

  ok(session.get('authToken') === token, 'Ember.SimpleAuth.Session reads the authToken from sessionStorage when initialized');
});

test('persists the authToken to the sessionStorage when it changes', function() {
  var session = Ember.SimpleAuth.Session.create();
  var token = Math.random().toString(36);
  session.set('authToken', token);
  ok(sessionStorage.authToken === token, 'Ember.SimpleAuth.Session persists the authToken in the sessionStorage');
});
