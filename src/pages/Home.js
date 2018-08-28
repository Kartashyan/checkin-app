import React from 'react';
import CheckinPage from '../containers'
import withAuthorization from "../higerOrderComponents/withAuthorization";

const HomePage = () => <CheckinPage/>;

export default withAuthorization(HomePage);
