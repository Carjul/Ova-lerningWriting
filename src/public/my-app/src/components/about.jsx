import Nav from './nav';
export default function About () {
    return (
        <section>
        <Nav props={4}/>
        <div className="flex flex-col items-center w-full h-full"  >

            <div className='p-5'>
               <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Cristian Daniel Builes Verona</h2>
	<br/>
    <p>Universidad De Cordoba</p>
	<p>Facultad de Educación</p>
	<p>Lic. en Informática</p>
	<p>Gestion de Proyectos</p>
	<br/>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Contacto</button>
    </div>
  </div>
</div>
            </div>
			<div className='p-5'>
               <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Carlos Julián Ramos González</h2>
    <br/>
    <p>Universidad De Cordoba</p>
	<p>Facultad de Educación</p>
	<p>Lic. en Informática</p>
	<p>Gestion de Proyectos</p>
	<br/>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Contacto</button>
    </div>
  </div>
</div>
            </div>
			<div className='p-5'>
               <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Jhoana Diaz Padilla</h2>
   <br/>
    <p>Universidad De Cordoba</p>
	<p>Facultad de Educación</p>
	<p>Lic. en Informática</p>
	<p>Gestion de Proyectos</p>
	<br/>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Contacto</button>
    </div>
  </div>
</div>
            </div>
            
        </div>
    </section>
    )
} 