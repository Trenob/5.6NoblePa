import Image from './Images.Js';
import './App.css';

function App() {
  return (
    <div className="App">
      <p style={{fontSize:'xxx-large'}}>Trevon Noble</p>
      <p style={{fontSize:'xxx-large'}}>5.6pa deployed</p>

      <section><Image value={'HeaderImage'}/></section>
      <section><Image value={'AssessmentImage'}/></section>
      <section><Image value={'InstructionsImage'}/></section>
    </div>
  );
}

export default App;
