import CardFormulario from "./CardFormulario";

function Formulario() {
    const inputs = [
        {
            tag:"Nombre",
            type:"text"
        },
        {
            tag:"Apellidos",
            type:"text"
        },
        {
            tag:"Masculino",
            type:"radio"
        },
        {
            tag:"Femenino",
            type:"radio"
        },
        {
            tag:"Edad",
            type:"number"
        },
        {
            tag:"Fecha de nacimiento",
            type:"date"
        },
        {
            tag:"Numero de telefono",
            type:"tel"
        },
        {
            tag:"Correo",
            type:"email"
        },
        {
            tag:"Contraseña",
            type:"password"
        }
    ]

    return (
        <div>
        {inputs.map(input => {
            return (<CardFormulario tag={input.tag} type={input.type} />)
        })}
    </div>
    );
}

export default Formulario