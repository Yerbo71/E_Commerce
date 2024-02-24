function Footer () {
    return(
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a>
                <p className="text-body-secondary">E-Shopping</p>
                <p className="text-body-secondary">E-Shopping site.Easy to buy and cheap</p>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                <h5>Contacts</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">tel:+707-296-43-43</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">fax:+707-296-43-43</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Kazakhstan.Almaty.Baker Street 43</a></li>
                </ul>
                </div>

                <div className="col mb-3">
                <h5>FAQ</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Feedback</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Creators</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Developers</a></li>
                </ul>
                </div>

            </footer>
        </div>

    )
}
export  default Footer;