import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center  min-h-screen">
      <Navbar />
      <Header />
      <Footer />
    </main>
  )
}
