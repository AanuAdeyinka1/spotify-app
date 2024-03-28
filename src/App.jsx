import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import { LandingPageHeader } from "./component/LandingPage/LandingPage.js"
import { LoginPage } from "./component/LoginPage/Login.jsx";


// const router = createBrowserRouter([
//   {
//     path: '',
//     component: LandingPageHeader,
//   },
//   {
//     path: "/login",
//     Element: <LoginPage />,
//   },
// ]);

//  export function App() {
//   // return <RouterProvider router ={router} />
//   return <LandingPageHeader />;
// }

// export default App;

export function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageHeader />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;




// export function App (){
//   return(
//     <LandingPageHeader />
    
//   )
// }

// export default App;