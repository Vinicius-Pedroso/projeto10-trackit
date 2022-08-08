import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Sign from './Components/Sign';
import Habits from './Components/HabitsSet/Habits';
{/*import Today from './Components/Today'; */}
{/*import Historic from './Components/Historic'; */}

export default function App (){
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign" element={<Sign />} />
                    <Route path="/Habits" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

