import Formulario from "../components/Formulario";
import Button from "../components/Button";
import '../assets/styles/contenedor.css'


function Contenedor() {
    return(
        <div className='container'>
            <h1 className='title'>Sign Up</h1>
            <Formulario/>
            <Button/>
        </div>
    );
}
export default Contenedor;