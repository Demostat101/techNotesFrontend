import { Link } from "react-router-dom"


const LandingPage = () => {
  return (
    <>
      
        <section className="">
            <header>
                <h1>Welcome to <span className="nowrap">Demostat Repair!</span></h1>
            </header>
            <main className="">
                <p>Located in Beautiful Lagos City, Demostat. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="">
                    Demostat. Repairs<br />
                    12, Obasanya<br />
                    Lagos City, Nigeria<br />
                    <a onClick={()=>alert("lol")} href="tel:+2347032517660">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Omikunle Ademola</p>
            </main>
            <footer>
                
                <Link to="login">Employee Login</Link>
            </footer>
        </section>
    </>
  )
}

export default LandingPage
