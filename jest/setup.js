import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('dotenv').config();

enzyme.configure({ adapter: new Adapter() });
