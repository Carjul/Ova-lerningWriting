import Nav from './nav';

export default function Home() {

	return (
		<section>
			<Nav props={1} />
			<div className="flex flex-col items-center w-full h-full" >

				<div className="card w-full h-full bg-base-100 border border-primary">
					<div className="card-body items-center text-center">
						<h1 className="card-title">Writing</h1>
						<p>Es la capacidad de producir un texto coherente y relevante. La ortografía y las estructuras gramaticales son los mayores obstáculos a superar, aunque supone un reto menor que la escritura porque da más tiempo a pensar y, en ocasiones, permite usar un diccionario. Practicamos esta habilidad cuando escribimos mensajes, notas o textos.
						</p>
						<br />
						<p><strong>Cómo practicar:</strong>
							Comunicarse por escrito en inglés con frecuencia (con amistades, profesores…) y hacer apuntes personales (listas de la compra o de tareas) en inglés.
							Llevar un diario o hacer redacciones que pueda corregir una persona especializada.
							Copiar expresiones útiles de libros o revistas para estudiar y aprenderlas.</p>
						<br />
						<iframe width="80%" height="350px" src="https://www.youtube.com/embed/1HkeuMw7PyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<br />
					</div>
				</div>

				<div className="card w-full h-1000px bg-base-100 border  border-primary">
					<div className="card-body">
						<br />
						<h1 className="card-title">Verbo To be</h1>

						<p>A diferencia del español, donde existe el verbo “ser” y el verbo “estar”, en inglés existe un solo verbo para expresar
							ambos significados: el verbo to be. Es el contexto el que determina su significado.
							Por ejemplo:
							<li>I am a doctor. / Soy médico.</li>
							<li>I’m at home. / Estoy en casa.</li>
							<li>Harper is from the U.S. / Harper es de EEUU.</li>
							<li>Noah is on vacation at the beach. / Noah está de vacaciones en la playa.</li>
						</p>
						<h1 className="card-title">Verbo to be en presente</h1>
						<br />
						<p>Sujeto	Verbo to be en presente
							<li>I - am (‘m)</li>
							<li>He / she / it - is (‘s)</li>
							<li>You / we / they - are (‘re)</li>

							Por ejemplo:
							<br />
							<li>My suitcase is very heavy. / Mi maleta es muy pesada.</li>
							<li>Rome is the capital of Italy. / Roma es la capital de Italia.</li>
						</p>
						<br />
						<h1 className="card-title">Estructura negativa del verbo to be en presente</h1>

						<p>Sujeto	Verbo to be en presente
							<li>I - am not  (‘m not)</li>
							<li>He / she / it          	is not (isn’t / ‘s not)</li>
							<li>You / we / they    	are not (aren’t / ‘re not)</li>

							Por ejemplo:

							<li>I’m not interested in soccer. / Yo no estoy interesado en el fútbol.</li>
							<li>He isn’t married. / Él no está casado.</li>
						</p>
						<br />
						<h1 className="card-title">Estructura interrogativa del verbo to be en presente</h1>
						<p>Verbo to be en presente	Sujeto
							<li>Am - I  ?</li>
							<li>Is - he / she / it  ?</li>
							<li>Are  - you / we / they  ?</li>

							Por ejemplo:

							<li>Is the weather nice today? / ¿El tiempo está agradable hoy?</li>
							<li>Are you ready? / ¿Estás listo?</li>
						</p>
						<br />
						<iframe width="100%" height="450px" src="https://www.youtube.com/embed/O-pELo5MMkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


					</div>
				</div>


				<div className="card w-full h-full bg-base-100 border  border-primary">
					<div className="card-body ">
						<h1 className="card-title">Pronombres personales en función del sujeto en inglés</h1>

						<strong>Los pronombres personales en función del sujeto reemplazan al sujeto de la oración.</strong>

						<p>TIP: Te darás cuenta que en el español se omite, pero en el inglés siempre se muestra como parte importante de la oración. </p>
						<br />
						<div className="flex flex-col flex-wrap">
						<p>Pronombres - Traducción - Ejemplo - Traducción</p>
							<br/>
							<li>I	(Yo) -	I am a teacher - Soy profesor</li>
							<li>You  (Tú) -	You are a good student	- Tú eres un buen estudiante</li>
							<li>He	 (Él) -	He is my father - Él es mi padre</li>
							<li>She (Ella)  -	She is late everyday - Ella llega tarde todos los días</li>
							<li>It	(Ello / Eso) - It is my house - Es mi casa</li>
							<li>We	(Nosotros)	-We have two cats - Tenemos dos gatos</li>
							<li>They	(Ellos) - They are twins - Ellos son gemelos</li>

						</div>
						<br />
						<iframe width="100%" height="450px" src="https://www.youtube.com/embed/mDdBvF0j-Zk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						<br />
						<h1 className="card-title"> Pronombres personal en función del objeto</h1>

						<strong>Los pronombres personales en función del objeto son todos aquellos que recaen en el objeto y complementan la oración. </strong>
						<p>TIP: los puedes ver acompañados de preposiciones como a, con, de, en, para, y otras.</p>
						<br />
						<div className="flex flex-col flex-wrap">
							<p>Pronombres - Traducción - Ejemplo - Traducción</p>
							<br/>
							<li>Me (me / mí)	Give me that book - Dame ese libro</li>
							<li>You ( ti / … te)	She loves you -	Ella te ama</li>
							<li>Him (lo / … se / … él)	 Just help him -	Solo ayúdalo</li>
							<li>Her (la / … se / … ella)	The email is for her - El correo electrónico es para ella</li>
							<li>It	(lo / ... se)	I'll think about it	- Lo pensaré</li>
							<li>Us	(nos / … nosotros)	Can you see us?	- ¿Nos puedes ver?</li>
							<li>Them (los / … ellos)	Did you talk to them? -	¿Hablaste con ellos?</li>

						</div>
						<br />
						<iframe width="100%" height="450px" src="https://www.youtube.com/embed/ftLQRXDcr40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						<br />
						<h1 className="card-title"> Pronombres posesivos</h1>
						<strong>Los pronombres posesivos son aquellos que indican pertenencia. Son muy comunes y por lo general se emplean al final de la oración.</strong>
						<p>TIP: no confundas con los adjetivos posesivos, estos no reemplazan al sustantivo sino que lo describen y siempre van antes de un sustantivo.</p>
						<br />
						<div className="flex flex-col flex-wrap">
							<p>Pronombres - Traducción - Ejemplo - Traducción</p>
							<br/>
							<li>Mine (… mío)  This coat is mine  -	Este abrigo es mío</li>
							<li>Yours (... tuyo)	These keys are yours -	Estas llaves son tuyas</li>
							<li>His (… de él / … suyo /de él)	This phone is his -	Este teléfono es suyo</li>
							<li>Hers (… de ella / … suyo / de ella)	My notebook is old, hers is new  -	Mi cuaderno es viejo, el de ella es nuevo</li>
							<li>Ours (… nuestro)	That red truck is going to be ours -	Ese camión rojo va a ser nuestro</li>
							<li>Theirs	(suyo /de ellos)	My apartment is here, theirs is  there -	Mi apartamento está aquí, el de ellos allá</li>

						</div>
						<br />
						<iframe width="100%" height="450" src="https://www.youtube.com/embed/BjO37cbHv2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						<br />
					</div>
				</div>
				<div className="card w-full h-full bg-base-100 border border-primary">
					<div className="card-body items-center text-center">
						<iframe src="https://h5p.org/h5p/embed/1341398" width="90%" height="751px" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Professions in english and spanish"></iframe>
						<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
					</div>
				</div>

			</div>

		</section>

	)
}