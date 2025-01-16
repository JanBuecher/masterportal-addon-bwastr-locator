import stateBWaStrLocator from "./stateBWaStrLocator";
import {generateSimpleGetters} from "../../../src/shared/js/utils/generators";

const getters = {
    ...generateSimpleGetters(stateBWaStrLocator),
    urlParams: state => {
        return {
            bwastrid: state.selectedWaterStreet.bwastrid,
            fromKilometer: state.fromKilometer,
            toKilometer: state.toKilometer
        };
    }
};

export default getters;
