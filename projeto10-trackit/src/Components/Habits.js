import { useState } from "react";
import Header from "./Header";
import Habitos from "./Habitos";
import Habitosdias from "./Habitosdias";
import Footer from "./Footer";
import Naotem from "./Naotem";

export default function Tela3() {
    const [Parte, setParte] = useState(0);
    const [Temhabito, setTemhabitos] = useState(true)
    return (
        <>
            <Header/>
            <Habitos setParte={setParte}/>
            {Parte == 1 && <Habitosdias setTemhabitos={setTemhabitos}/>}
            {Temhabito && <Naotem/>}
            <Footer/>
        </>
    );
}
