import {Actions, ActionConst} from "react-native-router-flux";
import _ from "lodash";

export const redirectTo = (scene) => {
    if (Actions.currentScene) Actions.reset(scene);
}

export const navigateTo = (scene, props = null) => {
    props ? Actions.push(scene, props) : Actions[scene].call();
}

export const navigateBack = () => Actions.pop();
