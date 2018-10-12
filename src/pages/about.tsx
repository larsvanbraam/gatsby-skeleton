import * as React from 'react';
import { Link } from 'gatsby';
import IndexLayout from '../layouts/index/IndexLayout';

const SecondPage = () => (
  <IndexLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </IndexLayout>
);

export default SecondPage;
