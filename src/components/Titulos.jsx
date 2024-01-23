
import '../css/Titulo.css'
export function Titulo({tit,icono}) {
    return(
        <article className="conTit">
            <h1 className="titulo">{tit}   {icono}</h1>
        </article>
    )
}

export function Subtitulo({subTit}) {
    return(
        <h2 className='subtitulo'>{subTit}</h2>
    );
    
}

 
export function Contenido({ conTit }) {
    const estilo = {
        fontFamily: 'Times New Roman',
        fontSize: '20px',  
    };
    return (
        <div className='contenido' style={estilo}>
            {conTit}
        </div>
    );
}

 
export function Notificacion({ noti }) {
    const estilo = {
        fontFamily: 'Times New Roman',
        fontSize: '16px',  
    };
    return (
        <div className='notificacion' style={estilo}>
            {noti}
        </div>
    );
}


