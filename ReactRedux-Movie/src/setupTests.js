import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import sinon from 'sinon';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
