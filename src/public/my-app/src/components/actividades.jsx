import Nav from './nav';
import audio from '../assets/audio-1.mpeg'
import {useRef} from 'react'
export default function Actividades() { 
const audioRef = useRef()
const handleSpeedChange = (event) => {
    audioRef.current.playbackRate = event.target.value;
  }
    return (
        <section>
            <Nav props={2}/>
            <div className="flex flex-col items-center w-full" >

                <div className='p-5 w-full h-full'>
                   
                  <iframe src="https://h5p.org/h5p/embed/1341107" width="100%" height="501" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Arrastre las palabras a los cuadros correctos"></iframe>
				  <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
                </div>
				
				<div className='p-5  w-full h-full' >
					<iframe src="https://h5p.org/h5p/embed/1341103" width="100%" height="433" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="pronombres personales"></iframe>
					<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
				</div>
				<div className='p-5  w-full h-full'>
				<iframe src="https://h5p.org/h5p/embed/1341384" width="100%" height="1036" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Write the correct profession"></iframe>
				<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
				</div>
				<div className='p-5  w-full h-full' >
					 <h1  className="card-title">Escucha y Escribe las palabras correctas</h1>
					<br/>
					<div >
						<audio ref={audioRef} src={audio} controls />
						<br/>
						<label>Velocidad:
							<input type="range" min="0.5" max="2" step="0.1" onChange={handleSpeedChange} />
						</label>
					</div>
					<br/>
					<iframe src="https://h5p.org/h5p/embed/1341023" width="100%" height="400" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="sellena espcion en blanco"></iframe>
					<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
				</div>
            </div>
        </section>
    )
} 