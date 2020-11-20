import React, {useState} from 'react';
import {Flex} from '@chakra-ui/react';
import TruckList from './TruckList';
import TruckDetails from './TruckDetails';

const Home = () => {
  const [truckId, setTruckId] = useState('');
  const [truckName, setTruckName] = useState('');
  return (
    <Flex h="100vh" w="100vw">
      <Flex h="100%" w="20rem" direction="column">
        <TruckList
          onClick={(id, name) => {
            setTruckId(id);
            setTruckName(name);
          }}
        />
      </Flex>
      <Flex h="100%" w="100%">
        {truckId && <TruckDetails id={truckId} name={truckName} />}
      </Flex>
    </Flex>
  );
};

export default Home;
