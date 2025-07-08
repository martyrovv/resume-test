import { ResumeForm } from "./components/ResumeForm";
import { ResumePreview } from "./components/ResumePreview";

function App() {
  return (
    <div style={{display:'flex'}}>
      <div>
        <ResumeForm />
      </div>
      <div>
        <ResumePreview />
      </div>
    </div>
  );
}

export default App;
