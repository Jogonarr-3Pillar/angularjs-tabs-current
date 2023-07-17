'use strict';

import { Configs } from './configs';
import { Services } from './services';
import { Components } from './components';

const app = angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
]);

Configs(app);
Services(app);
Components(app);
