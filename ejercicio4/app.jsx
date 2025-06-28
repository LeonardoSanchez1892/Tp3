const { useState } = React;

const App = () => {
    const [izquierdaHabilitado, SetIzquierdaHabilitado]= useState(false);
    const [derechoHabilitado, SetDerechoHabilitado]= useState(true);

    const toggleDerecho = () => {
        SetIzquierdaHabilitado(!izquierdaHabilitado);
        SetDerechoHabilitado(!derechoHabilitado);
    }

    const toggleIzquierdo = () => {
        SetIzquierdaHabilitado(!izquierdaHabilitado);
        SetDerechoHabilitado(!derechoHabilitado);
    }

    return (
        <>
            <button disabled= {izquierdaHabilitado} onClick={toggleIzquierdo}>
                Izquierdo
            </button>
            <button disabled= {derechoHabilitado} onClick={toggleDerecho}>
                Derecho
            </button>
        </>
    );
}

const contenedor = document.getElementById("root");
const root= ReactDOM.createRoot(contenedor);
root.render(<App/>);