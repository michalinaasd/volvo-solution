import React, {useEffect, useState} from 'react';
import Moment from 'react-moment';
import {
  Flex,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Text,
} from '@chakra-ui/react';
import Schedule from './Schedule';
import Appointments from './Appoinments';

const truckDetails = [
  {truck: 1, VIN: 'WDCGG5HB7FG361135', reg_num: 'KNM7UUMF', date: '12-12-2012'},
  {truck: 2, VIN: '3VWSK69M31M138266', reg_num: 'SPJ7DKCC', date: '11-11-2011'},
  {truck: 3, VIN: 'WA1CGAFP2EA153736', reg_num: 'YKCQD37Y', date: '10-10-2010'},
];

const TruckDetails = ({id, name}) => {
  const [VIN, setVIN] = useState('');
  const [regNum, setRegNum] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (id) {
      setVIN(
        truckDetails.find((element) => element.truck === id).VIN.toUpperCase()
      );
      setRegNum(truckDetails.find((element) => element.truck === id).reg_num);
      setDate(truckDetails.find((element) => element.truck === id).date);
    }
  }, [id]);

  return (
    <>
      <Flex h="100%" w="40%" direction="column">
        <Flex h="60%" w="100%" direction="column" align="center">
          <Text fontSize="3rem">Truck</Text>
          <Flex w="15rem" h="20rem" shadow="lg"></Flex>
        </Flex>
        <Flex h="40%" w="100%" direction="column">
          <Text fontSize="2rem" p={1}>
            Truck details
          </Text>
          <Flex direction="column" fontSize="1.3rem" p={2}>
            <Text fontWeight="medium">VIN</Text>
            <Text>{VIN}</Text>
          </Flex>
          <Flex direction="column" fontSize="1.3rem" p={2}>
            <Text fontWeight="medium">Registration Number</Text>
            <Text>{regNum}</Text>
          </Flex>
          <Flex direction="column" fontSize="1.3rem" p={2}>
            <Text fontWeight="medium">Vehicle Creation Date</Text>
            <Text>
              <Moment format="YYYY-MM-DD">{date}</Moment>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex h="100%" w="60%">
        <Tabs>
          <TabList>
            <Tab>Schedule</Tab>
            <Tab>Garage Appointments</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Schedule name={name} />
            </TabPanel>
            <TabPanel>
              <Appointments name={name} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default TruckDetails;
