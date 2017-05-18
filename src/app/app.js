import '../css/main.scss';
import 'angular'
import 'angular-ui-router';

import StateConstant from './constants/state.constant';
import SignInComponent from './components/signIn/signIn.component';
import SignUpComponent from './components/signUp/signUp.component';

const __svg__  = { path: '../svg/*.svg', name: 'svg/[hash].sprite.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

const coreApp = angular
    .module('app', [
        'ui.router'
    ])
    .constant('appState', StateConstant)
    .component('signIn', SignInComponent)
    .component('signUp', SignUpComponent)

    /*@ngInject*/
    .config(($stateProvider, $urlRouterProvider, appState) => {
        $stateProvider
            .state(appState.signIn.name, {
                url: appState.signIn.url,
                component: 'signIn'
            })
            .state(appState.signUp.name, {
                url: appState.signUp.url,
                component: 'signUp'
            });

        $urlRouterProvider.otherwise(appState.signIn.url);
    })
    .name;

export default coreApp;