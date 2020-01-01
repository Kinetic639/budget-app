import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>INFO</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share! </p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requiredAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in! </p>
      )}
    </div>
  );
};

// const Admininfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="this is the detail" />,
  document.getElementById("root")
);
// ReactDOM.render(
//   <Admininfo isAdmin={true} info="this is the detail" />,
//   document.getElementById("root")
// );
