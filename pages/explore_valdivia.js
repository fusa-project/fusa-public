import React from "react";
import dynamic from "next/dynamic";
import Head from 'next/head'

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map_valdivia"), {
    ssr: false
  });

  return (
    <div className="container">

      <Head>
        <title>Valdivia</title>
      </Head>

      <main>
        <div id="map">
          <MapWithNoSSR />
        </div>
      </main>


    </div>

  );
}