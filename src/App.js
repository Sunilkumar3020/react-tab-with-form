import { useState } from "react";
import Tab from "./components/Tab";
import { FormProvider } from "./context/FormContext";

import TabContent from "./components/TabContent";

function App() {
  const [activeTab, setActiveTab] = useState('Profile')
  const tabs = ['Profile', 'Interest', 'Settings']
 
  return (
    <FormProvider>
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </FormProvider>
  )
}

export default App;
