import { ResumeForm, type ResumeFormType } from "./components/ResumeForm";
import { ResumePreview } from "./components/ResumePreview";
import { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



function App() {

  const [data, setData] = useState<Partial<ResumeFormType>>()
  

  return (
    <div style={{display:'flex'}}>
      <DndProvider backend={HTML5Backend}>
      <div style={{ width: 400, padding: '0 20px' }}>
        <ResumeForm setData={setData} />
      </div>
      </DndProvider>
      <div style={{ flex: 1, padding: '0 20px' }}>
        <ResumePreview {...data}/>
      </div>
    </div>
  );
}

export default App;
