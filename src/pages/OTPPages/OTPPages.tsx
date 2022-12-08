import * as React from 'react';
import { FC } from 'react';
import OTPInterface from '../../components/auth/OPTInterface';
import '../LoginPages/LoginPages.scss';
import logo from '../../assets/COSCI_logo.png';

type OTPPagesProps = {
  //
};

const OTPPages: FC = () => {
  return (
    <>
      <body className="w-screen h-screen bgimg overflow-auto">
        <img
          src={logo}
          className="w-44 mt-2.5 ml-5 sm:w-48 sm:mt-5 sm:ml-5 md:w-48 md:ml-20 lg:w-48 lg:ml-40 xl:w-60"
          alt="COSCI_logo"
        />

        <div className="my-auto mt-24">
          <div className="flex justify-center">
            <OTPInterface />
          </div>
        </div>
      </body>
    </>
  );
};

export default OTPPages;
