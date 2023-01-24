import React from 'react';
// import { Loader } from 'components/Loader/Loader';
import { LoadButton } from './Button.styled';

// export const Button = ({ onClick, isLoading }) => (
//       isLoading ? (
//         <Loader></Loader>
//       ) : (
//         <LoadButton type='button' onClick={onClick}>Load more</LoadButton>
//       )
// )

  
export const Button = ({onClick}) =>(
  <LoadButton type='button' onClick={onClick}>Load more</LoadButton>
)