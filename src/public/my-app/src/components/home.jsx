import './home.css'
import Nav from './nav';

export default function Home() {

    return (
        <section>
            <Nav />
            <div className="contenedor">

                <div className='uno'>
                    <h3>Writing</h3>
                    <p>Es la capacidad de producir un texto coherente y relevante. La ortografía y las estructuras gramaticales son los mayores obstáculos a superar, aunque supone un reto menor que la escritura porque da más tiempo a pensar y, en ocasiones, permite usar un diccionario. Practicamos esta habilidad cuando escribimos mensajes, notas o textos.

</p>
                </div>
                <div className='dos'>
                    <p><strong>Cómo practicar:</strong>

                        Comunicarse por escrito en inglés con frecuencia (con amistades, profesores…) y hacer apuntes personales (listas de la compra o de tareas) en inglés.
                        Llevar un diario o hacer redacciones que pueda corregir una persona especializada.
                        Copiar expresiones útiles de libros o revistas para estudiar y aprenderlas.</p>
                        
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1HkeuMw7PyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
             
        </section>

    )
}