import { Oval } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#693524"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#f7b80a"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;