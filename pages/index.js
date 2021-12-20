import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Roof Repair | Fixing Your Leaking Roof</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Roofers Dublin!" />
        <p className="description">
          Local Professional We make use of the latest construction equipment and technology in our work.
     <p>  Our experts are highly trained and have long years of experience in the industry.  <p>  
    Roofers Dublin offer impeccable customer service and work.  <p>  
    We believe that the client knows best, and we will work hand in hand with you to ensure that your roof is constructed or repaired to your specifications, <p>  
    while offering advice to make it even better.
        </p>
    <p>  Roofers providing <a href="https://bit.ly/2R2LQmj">roofing services</a> if you need specialist quality roofing services, get a highly experienced team responsible></p>
      </main>

      <Footer />
    </div>
  )
}
