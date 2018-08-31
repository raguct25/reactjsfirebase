// import React from "react";
//
// const AccountPage = () => (
//   <div>
//     <h1>Account Page</h1>
//   </div>
// );
//
// export default AccountPage;

import React from "react";

import AuthUserContext from "../hoc/AuthUserContext";
import { PasswordForgetForm } from "./PasswordForget";
import PasswordChangeForm from "./PasswordChange";
import withAuthorization from "./withAuthorization";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

// export default AccountPage;
const authCondition = authUser => !!authUser && authUser.role === "ADMIN";

export default withAuthorization(authCondition)(AccountPage);
