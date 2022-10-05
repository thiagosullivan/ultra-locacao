import React from 'react';
import { IoRefreshSharp } from 'react-icons/io5';
import { LoaderContainer } from './style';

function Loader() {
  return (
    <LoaderContainer>
        <IoRefreshSharp />
    </LoaderContainer>
  )
}

export default Loader