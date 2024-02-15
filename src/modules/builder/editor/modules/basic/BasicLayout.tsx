import React, { Fragment } from 'react';
import { useBasicDetails } from 'src/stores/basic';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons';
import bulb from '../light-bulb-cartoon.png';
import Image from 'next/image';

const tabTitles = ['Contacts', 'Links', 'About'];

const BasicLayout = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const basicTabs = useBasicDetails((state) => state.values);
  const onChangeText = useBasicDetails.getState().reset;

  const changeActiveTab = (event: React.SyntheticEvent, activeTab: number) => {
    setActiveTab(activeTab);
  };

  return (
    <Fragment>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabTitles={tabTitles}
      ></BasicHeader>
      <BasicPanel
        activeTab={activeTab}
        basicTabs={basicTabs}
        onChangeText={onChangeText}
      ></BasicPanel>
      <div className="w-full px-5 py-5  text-center">
        <div
          className="w-full border-t-[5px] border-purple-500  rounded-lg py-5"
          style={{ backgroundColor: '#FFC5C5' }}
        >
          <div className="flex items-center ">
            {' '}
            <div className="flex-initial w-10 h-full">
              <Image src={'/icons/light-bulb-cartoon.png'} alt="idea" width="50" height="50" />
            </div>{' '}
            <div className="flex-initial w-90 text-lg">Tips To Enhance Resume</div>
          </div>
          <div className="flex  ">
            {' '}
            <div className=" flex-initial ml-4 mb-2 px-1 py-3 bg-pink-600 w-1 rounded-full"></div>{' '}
            <div className="ml-2 text-base">
              {' '}
              Opt for Gmail as email provider for better result .{' '}
            </div>
          </div>
          <div className="flex  ">
            {' '}
            <div className=" flex-initial ml-4  mb-2 px-1 py-3 bg-pink-600 w-1 rounded-full"></div>{' '}
            <div className="ml-2 text-base"> Provide Mobile Number which is properly working. </div>
          </div>
          <div className="flex ">
            {' '}
            <div className=" flex-initial ml-4  mb-2 px-1 py-3 bg-pink-600 w-1 rounded-full"></div>{' '}
            <div className="ml-2 text-base">
              {' '}
              Make sure links are properly working and redirect to idented page.{' '}
            </div>
          </div>
        </div>
      </div>
      {/* <OutlinedButton onClick={()=>{}}>
          <IoArrowUndo size="1.2rem" />
          <span className="ml-3">Reset</span>
        </OutlinedButton> */}
    </Fragment>
  );
};

export default BasicLayout;
