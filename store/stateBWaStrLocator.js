import wsSource from "../js/wsSource";
import wsLayer from "../js/wsLayer";


const state = {
    wsSource: wsSource,
    wsLayer: wsLayer,
    wsQueryAPI: "https://via.bund.de/wsv/bwastr-locator/rest/bwastrinfo/query",
    geocodingQueryAPI: "https://via.bund.de/wsv/bwastr-locator/rest/geokodierung/query",
    wkId: 25832,
    searchField: "all",
    active: false,
    id: "bWaStrLocator",
    name: "additional:modules.tools.bWaStrLocator.title",
    icon: "bi-search",
    renderToWindow: true,
    resizableWindow: true,
    isVisibleInMenu: true,
    deactivateGFI: false,
    bwastrid: null,
    selectedWaterStreet: null,
    searchText: "",
    toKilometer: 0,
    fromKilometer: 0
};

export default state;
