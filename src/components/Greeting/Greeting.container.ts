import { connect } from 'react-redux';

import Greeting from './Greeting';

const mapStateToProps = state => ({
  children: state.greeting.message,
});

export default connect(mapStateToProps)(Greeting);
