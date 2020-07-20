import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
});

// use DotEnv when testing to get test environment variables
DotEnv.config({ path: '.env.test' }); 