import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import TagBox from 'devextreme-react/tag-box';
import type { ValueChangedEvent } from 'devextreme/ui/tag_box';
import DataSource from 'devextreme/data/data_source';
import { data } from './data';

const dataSource = new DataSource({
  store: {
    data,
    type: 'array',
    key: 'ID',
  },
  group: 'Category',
});

const dropDownOptions = {
  height: 300,
};

function App(): JSX.Element {
  const onValueChanged = useCallback((e: ValueChangedEvent) => {
    // eslint-disable-next-line no-console
    console.log(e.previousValue);
    // eslint-disable-next-line no-console
    console.log(e.value);
  }, []);

  return (
    <TagBox
      id="tag-box"
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
