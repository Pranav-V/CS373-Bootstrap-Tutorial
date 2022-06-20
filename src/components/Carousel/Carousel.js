const Carousel = () => {
    return ( 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img height = "400px" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img height = "400px" src="https://www.science.org/do/10.1126/science.abi5787/abs/main_puppies_1280p.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img height = "400px" src="https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel