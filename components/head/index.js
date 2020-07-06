import React from 'react';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HeadPage() {
    return (
      <div>
         <Head>
                <title>Home - Veg</title>
                <meta name="description" content="Catálogo de Alimentos Veganos, Vegetarianos e sem Glúten"/>
                <meta name="author" content="Marcelo Franchini"/>
            </Head>
      </div>
    );
  }
  

