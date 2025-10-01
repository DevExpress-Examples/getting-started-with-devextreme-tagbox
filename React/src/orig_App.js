import { useCallback } from 'react';

import 'devextreme/dist/css/dx.light.css';
import './App.css';

import TagBox from 'devextreme-react/tag-box';
import DataSource from 'devextreme/data/data_source';

import { data } from './data';

const dataSource = new DataSource({
  store: {
    data: data,
    type: 'array',
    key: 'ID'
  },
  group: 'Category'
});

const dropDownOptions = {
  height: 300
};

function App() { 
  const onValueChanged = useCallback((e) => {
    console.log(e.previousValue);
    console.log(e.value);
  }, []);

  return (
    <TagBox
      id="tagBox"
      dataSource={dataSource}
      valueExpr="ID"
      displayExpr="Name"
      searchEnabled={true}
      showSelectionControls={true}
      grouped={true}
      multiline={true}
      maxDisplayedTags={6}
      label="Products"
      labelMode="floating"
      onValueChanged={onValueChanged}
      dropDownOptions={dropDownOptions}
    />
  );
}

export default App;
