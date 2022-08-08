import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Sign from './Components/Sign';
{/*import Habits from './Components/Habits'; */}

export default function App (){
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Sign" element={<Sign />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

