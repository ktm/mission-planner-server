"use strict";
const configuration_1 = require("../../model/configuration");
exports.fixture = new configuration_1.Configuration();
exports.fixture.missionName = "test mission";
exports.fixture.inactiveTimerMS = 1000;
exports.fixture.missionLoopTimerMS = 5000;
exports.fixture.navigationResolutionM = 10;
exports.fixture.navTimerMS = 15000;
exports.fixture.observationTimerMS = 5000;
``;
