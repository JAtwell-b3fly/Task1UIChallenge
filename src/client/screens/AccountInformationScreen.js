import React, { useState } from 'react';
import {View,VStack,HStack,Center,Text} from 'native-base';

import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import the custom created header component
import ScreenNav from './client/component/Layouts/ScreenNav'; //import the custom created screennav buttons component
import AccountForm from './client/component/Form/AccountForm'; //import the custom created accountform component
import AccountFormView from './client/component/Form/AccountFormView';
import { CLabel } from '../../components/common/Label';
import { Group5Layout } from '../../Screens/Layouts/Group5Layout';

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

  /* <h2 style={{ textAlign: 'center' }}>Account Information</h2>
      {isEditing ? (
        <AccountForm
          accountData={accountData}
          onSubmit={handleSaveClick}
        /> 
        ) : (
        <div>
          //display the form view of the account information 
          <input type="checkbox" onChange={handleEditClick} />
          <label htmlFor="editDetails">Edit Details</label>
        </div>
      )}
        */

  return (
    <Group5Layout headercomponent2={<SecondHeaderLayout />}
                  screennavcomponent={<ScreenNav />}
                  headerlabel={<CLabel />}
                  accountsettingsform={<AccountForm /> || <AccountFormView />}
    />
  );
};

