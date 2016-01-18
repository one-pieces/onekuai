/// <reference path="../../../app.d.ts" />
/// <amd-dependency path="css!./login.css" />
/// <amd-dependency path="text!features/base/login/login.html" />

import angular = require('angular');
import config = require('config');
import userService = require('../../../components/services/user/user-service');
import loginController = require('./login-controller');

'use strict';

export var moduleName = config.appName + '.base.login';
export var template = window.require('text!features/base/login/login.html');
export var controllerName = loginController.controllerName;

angular.module(moduleName, ['ui.router',userService.moduleName])
    .controller(loginController.controllerName, loginController.Controller);
