import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import Footer from './Components/Footer';
{/*import Habits from './Components/Habits'; */}

export default function App (){
    
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
};

