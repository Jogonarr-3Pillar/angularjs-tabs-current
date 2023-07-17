export function RoutingConfig(app) {
    app.config([
        '$routeProvider',
        ($routeProvider) => {
            $routeProvider
                .when('/hello-world', {
                    templateUrl:
                        'app/components/hello-world/hello-world.template.html',
                    controller: 'HelloWorldController',
                    caseInsensitiveMatch: true,
                })
                .when('/tabs', {
                    templateUrl: 'app/components/tabs/tabs.template.html',
                    controller: 'TabsController',
                    caseInsensitiveMatch: true,
                })
                .otherwise({
                    redirectTo: '/hello-world',
                });
        },
    ]);
}
