import {Configuration} from "../../model/configuration";

export var fixture:Configuration = new Configuration();

fixture.missionName="test mission";
fixture.inactiveTimerMS = 1000;
fixture.missionLoopTimerMS = 5000;
fixture.navigationResolutionM = 10;
fixture.navTimerMS = 15000;
fixture.observationTimerMS = 5000;

``