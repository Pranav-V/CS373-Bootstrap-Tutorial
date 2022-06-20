import NavBar from "./components/NavBar/NavBar"
import Accordian from "./components/Accordian/Accordian"
import Carousel from "./components/Carousel/Carousel"
const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Accordian></Accordian>
            <br />
            <div className = "container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-0">

                    </div>
                    <div className = "col-lg-6 col-md-6 col-sm-12">
                        <Carousel></Carousel>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-0">

                    </div>
                </div>
                <br />
                <div className = "row">
                    <div className = "col-lg-4 col-md-3 col-sm-12" style = {{backgroundColor:"red", textAlign: "center"}}>
                        <h3>CS</h3>
                    </div>
                    <div className = "col-lg-6 col-md-3 col-sm-12" style = {{backgroundColor:"blue", textAlign: "center"}}>
                        <h3>373</h3>
                    </div>
                    <div className = "col-lg-2 col-md-6 col-sm-12" style = {{backgroundColor:"yellow", textAlign: "center"}}>
                        <h3>SWE</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App