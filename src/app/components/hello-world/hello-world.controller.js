export function HelloWorldController(app) {
    app.controller('HelloWorldController', [
        '$scope',
        ($scope) => {
            $scope.title = 'Hello World!';
            $scope.message = 'Greetings from an AngularJs controller!';
        },
    ]);
}
