import Head from 'next/head'
import Link from 'next/link'

const Home = () => {   
    return (
      <div className="container">
          <Head>
              <title>FuSA</title>
          </Head>

          <main>
              <h1 className="title">
              FuSA
              </h1>

              <p className="description">
              Análisis de las FUentes Sonoras Ambientales
              </p>
              <div className="grid">
		<p className="welcome">
              	Bienvenido
	        </p>
              	<Link href="upload_audio">
                  <a className="card">
                  <h3>FuSA &rarr;</h3>
                  <p>Añadir sus grabaciones audios.</p>
                  </a>
              	</Link>
              	<Link href="fusa_roads">
                  <a className="card">
                  <h3>FuSA-ROADS  &rarr;</h3>
                  <p>Añadir audio y video.</p>
                  </a>
              	</Link>
              </div>
          </main>

          <footer>
              Universidad Austral de Chile
          </footer>
      </div>
    )
}

export default Home;
