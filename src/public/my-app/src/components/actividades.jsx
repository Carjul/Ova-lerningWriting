import Nav from './nav';
export default function Actividades() { 
    return (
        <section>
            <Nav />
            <div className="flex flex-col items-center w-full h-full" id="contenedor">

                <div className='p-5' >
                   
                    <iframe title='crucigrama' width="795" height="690" frameborder="0" src="https://es.educaplay.com/juego/5385887-english_writing_a1.html"></iframe>
                </div>
                <div className='p-5'>
                    <p>H5P</p>
                </div>
            </div>
        </section>
    )
} 