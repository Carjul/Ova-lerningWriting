import Nav from './nav';
import Iframe from 'react-iframe'
export default function Evaluacion () {
	
   
   return (
        <section>
        <Nav props={3} />
        <div className="flex flex-col items-center w-full h-full" id="contenedor">

            <div className='p-5'>
				<h1 className="card-title">Evalua tus conocimientos</h1>
             </div>
            
            <div className='p-5  w-full h-full'>
			<Iframe url={"https://h5p.org/h5p/embed/1341115"} width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="evalucion" />
             <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
            </div>
        </div>
    </section>
    )
} 