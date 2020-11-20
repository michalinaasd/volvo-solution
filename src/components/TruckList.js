import React from 'react';
import {Button} from '@chakra-ui/react';
import {trucks} from './constants';

const TruckList = ({onClick}) => {
  return (
    <>
      {trucks.map((value) => (
        <Button
          key={value.id}
          mx={4}
          my={2}
          onClick={() => onClick(value.id, value.name)}
        >
          {value.name}
        </Button>
      ))}
    </>
  );
};

export default TruckList;
