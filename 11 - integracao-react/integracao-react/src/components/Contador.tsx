import React, { useState } from "react";

import ContadorValor from "./ContadorValor";

interface ContadorProps {
  valorInicial: number;
}

interface ContadorState {
  valor: number;
}

function Contador(props: ContadorProps) {
  const [valor, setValor] = useState<ContadorState>({
    valor: props.valorInicial,
  });

  return (
    <div>
      <ContadorValor contador={valor.valor} />
      <button onClick={() => setValor({ valor: valor.valor + 1 })}>+</button>
      <button onClick={() => setValor({ valor: valor.valor - 1 })}>-</button>
    </div>
  );
}

export default Contador;
