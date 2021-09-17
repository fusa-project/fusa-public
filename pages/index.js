import Head from 'next/head'
import Link from 'next/link'
import Login from '../src/components/login';
import Logout from '../src/components/logout';
import { useAuthContext } from '@context/auth';

const Home = () => {   
    const { currentUser } = useAuthContext()
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
              {
              currentUser ?
              <div className="grid">
              <p className="welcome">
                  Bienvenido {currentUser.displayName}
              </p>
              <Link href="upload_audio">
                  <a className="card">
                  <h3>Añadir Datos  &rarr;</h3>
                  <p>Añadir sus grabaciones audios.</p>
                  </a>
              </Link>
              <Logout/>
              </div>
              :
              <Login/>
              }
          </main>

          <footer>
              Universidad Austral de Chile
          </footer>
      </div>
    )
}

export default Home;