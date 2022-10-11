import { useState } from "react";

export default function Carrinho(){
    const [Tanque,setTanque] = useState(0);
	const [Km,setKm] = useState(0);
	const [Consumo,setConsumo] = useState(0);
	const [Resultado,setResultado] = useState(0)

    function calcular (){
        let x = Km/Consumo/Tanque;
        setResultado(Math.ceil(x))
    }
    


    return(
       <main >
        <h1>calcular parada</h1>
        <div> km <input type="text" value={Km} onChange={e => setKm(e.target.value)}></input> </div>
        <div> tanque <input type="number" value={Tanque} onChange={e => setTanque(Number(e.target.value))}></input> </div>
        <div> consumo <input type="number" value={Consumo} onChange={e => setConsumo(Number(e.target.value))}></input> </div>
        <button onClick={calcular}>Vereficar</button>
        <div>  {Resultado} </div>

       </main>)
}












