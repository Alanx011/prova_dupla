import {useState} from "react";


export default function Linhas() {
         const [linha, setLinha] = useState(0);
         
         const [resul, setResul] = useState(0);

          function Calcular(){
            let arr = []
            for (let cont =1; cont <= linha; cont++){
                process.stdout.writr("*" );
            arr.push(cont + " ")
          }  
          setResul(arr)

}

    return(
    <main>
        <h1>Contador Guilherme / Alan </h1>
        <label>Digite o primeiro numero:</label>
        <input type ="number" value={linha} onChange={e => setLinha(e.target.value)} />
        <br/>
        <button onClick={Calcular}> Calcular </button>             
        <div>  {resul} </div> 
    </main>
    )
}

