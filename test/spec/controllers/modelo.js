'use strict';

describe('Controller: ModeloCtrl', function () {

  // load the controller's module
  beforeEach(module('modplanApp'));

  var ModeloCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModeloCtrl = $controller('ModeloCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModeloCtrl.awesomeThings.length).toBe(3);
  });
});
