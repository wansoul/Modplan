'use strict';

describe('Controller: InformacoesCtrl', function () {

  // load the controller's module
  beforeEach(module('modplanApp'));

  var InformacoesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InformacoesCtrl = $controller('InformacoesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InformacoesCtrl.awesomeThings.length).toBe(3);
  });
});
