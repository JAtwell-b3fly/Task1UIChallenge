import React, { useState } from 'react';
import Header from './Header'; //import the custom created header component
import Footer from "./Footer"; //import the custom created footer component
import ScreenNav from './ScreenNav'; //import the custom created screennav buttons component
import AccountForm from './AccountForm'; //import the custom created accountform component

const AccountInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [accountData, setAccountData] = useState({
    // default account data fetched from the database
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (newAccountData) => {
    // send a request to the API to update the account data
    // if successful, update the accountData state and setIsEditing(false)
  };

  return (
    <div>
      <Header title="Account Information" height="35%" />
      <ScreenNav />
      <h2 style={{ textAlign: 'center' }}>Account Information</h2>
      {isEditing ? (
        <AccountForm
          accountData={accountData}
          onSubmit={handleSaveClick}
        />
      ) : (
        <div>
          {/* display the form view of the account information */}
          <input type="checkbox" onChange={handleEditClick} />
          <label htmlFor="editDetails">Edit Details</label>
        </div>
      )}
    </div>
  );
};

export default AccountInformation;
