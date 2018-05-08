// a higher order component is a component, a regular old react component that renders another react component
// the goal of a higher order component is to reuse code

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>
      The info is :
      {props.info}
    </p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <p> {props.info} </p>
      ) : (
        <p>You are not authorized to see these props son</p>
      )}
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>No Props</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo info="There are the details" isAdmin={true} />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthInfo info="There are the details" isAuthenticated={false} />,
  document.getElementById('app')
);
