import Nav from './nav';
export default function About () {
    return (
        <section>
        <Nav props={4}/>
        <div className="flex flex-col items-center w-full h-full" id="contenedor">

            <div className='p-5'>
               <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Cristian Daniel Builes Verona</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">FacebooK</button>
    </div>
  </div>
</div>
            </div>
			<div className='p-5'>
               <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Carlos Julián Ramos González</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Facebook</button>
    </div>
  </div>
</div>
            </div>
			<div className='p-5'>
               <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Jhoana Diaz Padilla</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Facebook</button>
    </div>
  </div>
</div>
            </div>
            
        </div>
    </section>
    )
} 