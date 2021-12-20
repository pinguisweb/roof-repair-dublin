import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Local Professional
<br />
We make use of the latest construction equipment and technology in our work. <br />
    Our experts are highly trained and have long years of experience in the industry. <br />
    Roofers Dublin offer impeccable customer service and work. <br />
    We believe that the client knows best, and we will work hand in hand with you to ensure that your roof is constructed or repaired to your specifications while offering advice to make it even better.
        </p>
    <p>  Roofers providing <a href="https://bit.ly/2R2LQmj">roofing services</a> if you need specialist quality roofing services, get a highly experienced team responsible></p>
      </main>

      <Footer />
    </div>
  )
}
