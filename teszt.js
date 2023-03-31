

  QUnit.module('masodfokuEgyenletMegoldasa(2, 4, -6)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(2, 4, -6), {X1: 1, X2: -3});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(1, 32, 0)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 32, 0), {X1: 0, X2: -32});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(1, 0.7, -4)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 0.7, -4), {X1: 1.4142135623730951, X2: -1.4142135623730951});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(2, 4, 6)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(2, 4, 6), {X1: "komplex", X2: "komplex"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(-2, 0, -6)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-2, 0 -6), {X1: "komplex", X2: "komplex"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(0, 0, 0)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0, 0, 0), {X1: "NaN", X2: "nincs"});
    });
  });


  QUnit.module('masodfokuEgyenletMegoldasa(0.2, 1, 2)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0.2, 1, 2), {X1: "NaN", X2: "-végtelen"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(0, 2, -4)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0.2, 1, 2), {X1: "NaN", X2: "-végtelen"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(-0.2, 3, 6)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-0.2, 3, 6), {X1: "NaN", X2: "végtelen"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(-0.2, 3, 6)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(a, 3, 6), {X1: "komplex", X2: "komplex"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(2, b, -4)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(2, b, -4), {X1: "komplex", X2: "komplex"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(1, 0, 0)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 0, 0), {X1: "0", X2: "nincs"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(-3, -2, -5)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(-3, -2, -5), {X1: "komplex", X2: "komplex"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(0.1, 2.5, 3.6)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0.1, 2.5, 3.6), {X1: "NaN", X2: "-végtelen"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(0.1, 2.5, 3.6)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(0.1, 2.5, 3.6), {X1: "-végtelen", X2: "NaN"});
    });
  });

  QUnit.module('masodfokuEgyenletMegoldasa(a, b, b)', function() {
    QUnit.test('masodfoku', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(a, b, b), {X1: "komplex", X2: "komplex"});
    });
  });









  
 

  