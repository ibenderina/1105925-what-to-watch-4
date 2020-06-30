import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {create, act} from "react-test-renderer";

window.create = create;
window.act = act;

window.React = require(`react`);
window.renderer = require(`react-test-renderer`);
window.PropTypes = require(`prop-types`);

window.shallow = Enzyme.shallow;
window.mount = Enzyme.mount;

Enzyme.configure({adapter: new Adapter()});
