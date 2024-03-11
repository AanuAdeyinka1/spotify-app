import logo from "./logo.svg";
import "./App.css";
import { LandingPageHeader } from "./component/LandingPage";
import { Logo } from "./component/logo";
import { SectionOne } from "./component/SectionOne/SectionOne";
import {Button} from "./component/SectionOne/Button"
import { Features }  from "./component/FeatureSection/FeatureSection"


function App() {
  return (
    <div>
      <LandingPageHeader />
      <Logo />
      <SectionOne><Button></Button></SectionOne>
      
    </div>
  );
}

export default App;



