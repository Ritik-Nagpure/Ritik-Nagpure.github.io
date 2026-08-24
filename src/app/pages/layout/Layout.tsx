import Display from "./display/Display"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Hero from "./hero/Hero"

const Layout = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Display />
            <Footer />
        </div>
    )
}

export default Layout