/// <reference path='../../../app.d.ts' />

import config = require('config');
import models = require('../../../components/models');
import userService = require('../../../components/services/user/user-service');

'use strict';

export interface IScope extends ng.IScope {
    profile?: ProfileController;
}

export var controllerName = config.appName + '.base.profile.controller';

/**
 * Controller for the profile page
 */
export class ProfileController {
    static $inject = [ '$scope' ];
    newPassword: string;
    newPassword2: string;
    oldPassword: string;
    user: models.user.IUser;

    constructor(private $scope: IScope,
                private userService: userService.Service) {
        $scope.profile = this;
    }
}

export class Controller extends ProfileController {}