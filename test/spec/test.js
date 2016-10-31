describe('pubsub logger tests', function() {
  beforeEach(function() {
    sinon.spy(console, 'info');
  });

  afterEach(function() {
    console.info.restore();
  });

  describe('subscribe tests', function () {
    it('will console info when subscribe', function () {
      $.subscribe('subscribe_event', f => f);
      assert(console.info.calledOnce);
    });
  });

  describe('publish tests', function () {
    it('will console info when publish', function () {
      $.publish('publish_event', f => f);
      assert(console.info.calledOnce);
    });
  });

  describe('unsubscribe tests', function () {
    it('will console info when unsubscribe', function () {
      $.unsubscribe('test_event', f => f);
      assert(console.info.calledOnce);
    });
  });
});
