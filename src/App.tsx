import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CDropDown from './Components/CDropDown/CDropDown';

function App() {
  const options = ['1051', '6565', '5485'];

  const [value, setValue] = useState<string | number | null>(null);

  return (
    <>
      <CDropDown
        prompt="لیست نمایندگی ها"
        searchPlaceholder="جستجو..."
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </>
  );
}

export default App;
