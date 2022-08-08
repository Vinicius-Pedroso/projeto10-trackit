import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Sign from './Components/Sign';
{/*import Habits from './Components/Habits'; */}
{/*import Today from './Components/Today'; */}
{/*import Historic from './Components/Historic'; */}

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

