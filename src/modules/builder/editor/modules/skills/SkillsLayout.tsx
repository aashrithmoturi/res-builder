import { useState } from 'react';
import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
  useGeneralSkills,
} from 'src/stores/skills';
import EditSectionContainer from 'src/helpers/common/components/EditSectionContainer';
import Skill from './components/Skill';
import Checkbox from '@mui/material/Checkbox';
import { useCounter } from 'src/stores/useCounter';
import { useTipSkillExp } from 'src/stores/useTip';
import { Button } from '@mui/material';

const SkillsLayout = () => {
  const skillState = [
    useGeneralSkills(),
    useLanguages(),
    useFrameworks(),
    useLibraries(),
    useDatabases(),
    useTools(),
  ];

  const [expanded, setExpanded] = useState<string | false>('Languages');

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { increaseCounter, decreaseCounter } = useCounter();
  const handleCounterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      increaseCounter(); // Increase counter if checked
    } else {
      decreaseCounter(); // Decrease counter if unchecked
    }
  };
  const { isTipVisible2, showTip2, hideTip2 } = useTipSkillExp();
  return (
    <div className="flex flex-col gap-8 mb-8">
      {/* <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox onChange={handleCounterChange} checked={useCounter.getState().counter > 1} />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div> */}
      <Button variant="contained" onClick={isTipVisible2 ? hideTip2 : showTip2}>
        {isTipVisible2 ? 'Hide Tip' : 'Show Tip'}
      </Button>
      {skillState.map((state) => (
        <EditSectionContainer
          key={state.title}
          title={state.title}
          expanded={expanded === state.title}
          isEnabled={state.isEnabled}
          setIsEnabled={state.setIsEnabled}
          clickHandler={() => handleChange(state.title, expanded !== state.title)}
        >
          <Skill
            items={state.values}
            addItem={state.add}
            removeItem={state.remove}
            setItems={state.reset}
            hasLevel={state.hasLevel}
          />
        </EditSectionContainer>
      ))}
      <div className="flex flex-row mt-3 items-center gap-2">
        {' '}
        <Checkbox
          onChange={handleCounterChange}
          checked={useCounter.getState().counter > 1}
          disabled={useCounter.getState().counter > 2}
        />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
    </div>
  );
};

export default SkillsLayout;
