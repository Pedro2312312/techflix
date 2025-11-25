const CampoTexto = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return(
        <div className="campoTexto">
            <label>{props.rotulo}</label>
            <input type="text" value={props.valor} onChange={aoDigitar} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto