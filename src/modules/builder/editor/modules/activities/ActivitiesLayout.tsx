import { Fragment, useState, SyntheticEvent } from 'react';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';
import Achievements from './components/Achievements';
import Involvements from './components/Involvements';
import { useCounter } from 'src/stores/useCounter';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useTipAchievements } from 'src/stores/useTip';

//achievement section
export interface IActivityTab {
  key: string;
  label: string;
  component: () => JSX.Element;
}

export interface IAllActivityTabs {
  [key: string]: IActivityTab;
}

const allActivityTabs: IAllActivityTabs = {
  // involvements: {
  //   key: 'involvements',
  //   label: 'Involvements',
  //   component: Involvements,
  // },
  achievements: {
    key: 'achievements',
    label: 'Achievements',
    component: Achievements,
  },
};

const ActivitiesLayout = () => {
  const [activeTab, setActiveTab] = useState(allActivityTabs['achievements']);

  const changeActiveTab = (event: SyntheticEvent, key: string) => {
    const selectedTab = allActivityTabs[key];
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
  };
  const { increaseCounter, decreaseCounter } = useCounter();
  const handleCounterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      increaseCounter(); // Increase counter if checked
    } else {
      decreaseCounter(); // Decrease counter if unchecked
    }
  };
  const { isTipVisible5, showTip5, hideTip5 } = useTipAchievements();
  return (
    <Fragment>
      {/* <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox onChange={handleCounterChange} checked={useCounter.getState().counter > 4} />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div> */}
      <Button variant="contained" onClick={isTipVisible5 ? hideTip5 : showTip5} className="w-full">
        {isTipVisible5 ? 'Hide Tip' : 'Show Tip'}
      </Button>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabs={allActivityTabs}
      ></BasicHeader>
      <BasicPanel activeTab={activeTab} />
      <div className="flex flex-row mt-3 items-center gap-2">
        {' '}
        <Checkbox
          onChange={handleCounterChange}
          checked={useCounter.getState().counter > 4}
          disabled={useCounter.getState().counter > 5}
        />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
    </Fragment>
  );
};

export default ActivitiesLayout;
