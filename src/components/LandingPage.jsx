import { Link } from "react-router-dom"


const LandingPage = () => {
  return (
    <>
      
        <section className=" w-full h-screen text-white p-[10px] flex justify-between flex-col">
            <div>
            <header>
                <h1 className="font-[700]">Welcome to <span className="nowrap">Demostat Repairs!</span></h1>
            <hr className="my-[10px]"/>
            </header>
            <main className="">
                <p>Located in Beautiful Lagos City, Demostat. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="my-[15px]">
                    Demostat. Repairs<br />
                    12, Obasanya<br />
                    Lagos City, Nigeria<br />
                    <a href="tel:+2347032517660">(234) 785267-5555</a>
                </address>
                <br />
                <p>Owner: Omikunle Ademola</p>
            </main>
            </div>
            <footer className="flex flex-col gap-3">
            <hr/>
                
                <Link to="login">Employee Login</Link>
            </footer>
        </section>
    </>
  )
}

export default LandingPage
