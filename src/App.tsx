import { ResumeForm, type ResumeFormType } from "./components/ResumeForm";
import { ResumePreview } from "./components/ResumePreview";
import { useState } from "react";


function App() {

  const [data, setData] = useState<ResumeFormType>()



  return (
    <div style={{display:'flex'}}>
      <div style={{ width: 400, padding: '0 20px' }}>
        <ResumeForm setData = {setData} />
      </div>
      <div style={{ flex: 1, padding: '0 20px' }}>
        <ResumePreview {...data}/>
      </div>
    </div>
  );
}

export default App;
