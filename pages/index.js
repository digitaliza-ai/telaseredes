import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Home from '../src/pages/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Telas & Redes Paranavaí - Soluções em Telas e Redes de Proteção</title>
        <meta name="description" content="Telas & Redes Paranavaí - Soluções em Telas e Redes de Proteção em Paranavaí e região" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
