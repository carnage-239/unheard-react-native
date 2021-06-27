import React from 'react';
import {connect} from 'react-redux';
import StackNav from './StackNavigator';
import TabNav from './TabNavigation';

const MainNavigation = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <TabNav />;
  }
  return <StackNav />;
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(MainNavigation);
