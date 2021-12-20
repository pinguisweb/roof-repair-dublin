import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Roof Repair | We Fix Your Leaking Roofs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Welcome to my Roofers Dublin!" />
        <p className="description">
          Local Professional we make use of the latest construction equipment and technology in our work.
     <p>  Our experts are highly trained and have over 20 years of experience in the industry.  <p>  
    Roofers Dublin offer impeccable customer service and work.  <p>  
    We believe that the client knows best, and we will work hand in hand with you to ensure that your roof is constructed or repaired to your specifications, <p> 
    we also offer advice to make it even better.
        </p>
    <p>  Roofers providing <a href="https://bit.ly/2R2LQmj">roofing services</a> if you need specialist quality roofing services, 
    get a highly experienced team in dublin.></p>
      </main>

      <Footer />
    </div>
  )
}
