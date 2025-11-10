import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Services from '../src/pages/Services'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Serviços - Telas & Redes Paranavaí</title>
        <meta name="description" content="Conheça nossos serviços em telas mosquiteiras e redes de proteção" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
