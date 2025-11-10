import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import About from '../src/pages/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre - Telas & Redes Paranavaí</title>
        <meta name="description" content="Conheça a história e missão do Telas & Redes Paranavaí" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      
      <Header />
      <main>
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
