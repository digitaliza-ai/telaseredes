import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Products from '../src/pages/Products'

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Produtos - Telas & Redes Paranavaí</title>
        <meta name="description" content="Conheça nossos produtos em telas e redes de proteção" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
