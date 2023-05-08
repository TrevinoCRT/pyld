angular.element(document.querySelector('body')).injector().invoke(function($rootScope) {
  $rootScope.$apply(function() {
    $rootScope.app.rentOwed = 0;
    $rootScope.app.paymentHistory.forEach(function(record) {
      record.amount = 0;
    });
  });
});
