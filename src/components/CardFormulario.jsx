import '../assets/styles/cardFormulario.css';

function CardFormulario({tag,type}) {
    return(
        <div className="atributos">
            <h3 className="tags">{tag}</h3>
            <input type={type} className="inputs" name="Seleccion"/>
        </div>
    );
}

export default CardFormulario