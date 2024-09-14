import React from 'react';
import { Circles } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
