import Nav from './nav';
export default function Actividades() { 
    return (
        <section>
            <Nav />
            <div className="contenedor">

                <div className='uno'>
                    <p>EDUCAPLAY</p>
                    <iframe title='crucigrama' width="795" height="690" frameborder="0" src="https://es.educaplay.com/juego/5385887-english_writing_a1.html"></iframe>
                </div>
                <div className='dos'>
                    <p>H5P</p>
                </div>
            </div>
        </section>
    )
} 