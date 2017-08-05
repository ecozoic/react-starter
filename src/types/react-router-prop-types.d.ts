declare module 'react-router-prop-types' {
  import PropTypes from 'prop-types';

  export const location: PropTypes.Requireable<any>;
  export const match: PropTypes.Requireable<any>;
  export const history: PropTypes.Requireable<any>;

  export default {
    location,
    match,
    history,
  };
}
