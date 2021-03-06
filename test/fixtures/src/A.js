/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

/*global define*/

define(function (require, exports, module) {
    'use strict';
    var A = {};

    A.Direction = {
        X: 0,
        Y: 1,
        Z: 2
    };

    A.hello = function hello() {
        return 'hello';
    };

    module.exports = A;
});
