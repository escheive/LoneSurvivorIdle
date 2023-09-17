import React, { useEffect, useContext } from 'react';
import { Text } from 'react-native';

import BaseCurrencyHeader from './currencies/BaseCurrencyHeader';
import Timer from './timer/Timer';

const Header = () => {

  return (
    <>
      <BaseCurrencyHeader />
      <Timer />
    </>
  );
};

export default Header;
