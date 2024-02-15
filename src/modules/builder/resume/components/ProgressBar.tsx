import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { IoMdPerson } from 'react-icons/io';
import { FaUserGear } from 'react-icons/fa6';
import { PiCertificateFill } from 'react-icons/pi';
import { RiUserStarFill } from 'react-icons/ri';
import { FaFileSignature } from 'react-icons/fa';
import { MdAssignmentAdd } from 'react-icons/md';
import { FaTrophy } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const ProgressBar: React.FC = () => (
  <div className=" bg-cyan-700 bg-opacity-60 rounded-full shadow-md py-5">
    <Steps
      labelPlacement="vertical"
      // style={{backgroundColor:'black'}}
      items={[
        {
          title: <h1 style={{ fontSize: '20px', color: '#F9EFDB' }}>Details</h1>,
          status: 'finish',
          icon: <IoMdPerson size="2rem" style={{ color: '#F9EFDB' }} />,
          // <UserOutlined style={{color:'#52C41A'}}/>,
        },
        {
          title: <h1 style={{ fontSize: '20px', color: '#F9EFDB' }}>Skills</h1>,
          status: 'finish',
          icon: <FaUserGear size="2rem" style={{ color: '#F9EFDB' }} />,
        },
        {
          title: <h1 style={{ fontSize: '20px', color: '#F9EFDB' }}>Education</h1>,
          status: 'finish',
          icon: <PiCertificateFill size="2rem" style={{ color: '#F9EFDB' }} />,
        },
        {
          title: <h1 style={{ fontSize: '20px', color: '#F9EFDB' }}>Experience</h1>,
          status: 'finish',
          icon: <RiUserStarFill size="2rem" style={{ color: '#F9EFDB' }} />,
        },
        {
          title: <h1 style={{ fontSize: '20px', color: '#F9EFDB' }}>Projects</h1>,
          status: 'process',
          icon: <MdAssignmentAdd size="2rem" style={{ color: '#F9EFDB' }} />,
        },
        {
          title: <h1 style={{ fontSize: '20px' }}>Achievements</h1>,
          status: 'wait',
          icon: <FaTrophy size="2rem" />,
        },
        {
          title: 'Done',
          status: 'wait',
          icon: <FaCheckCircle size="2rem" />,
        },
      ]}
    />
  </div>
);

export default ProgressBar;
