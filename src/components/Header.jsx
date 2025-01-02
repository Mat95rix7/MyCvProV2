const Header = () => {
    return (
        <div id="header" className="bg-light text-center py-3" >

            <nav className="navbar navbar-expand-lg bg-light mb-3">
                <div className="container">
                    <a className="navbar-brand ms-5" href="#"><img src="/matrix-background-p1cs5r8dnazb6y1h.webp" alt="" width="90" className="rounded-circle"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-evenly" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="btn nav-link active" aria-current="page" href="/about">À propos</a>
                        </li>
                        <li className="nav-item">
                        <a className="btn nav-link" href="/skills">Compétences</a>
                        </li>
                        <li className="nav-item">
                        <a className="btn nav-link" href="/experiences">Expériences</a>
                        </li>
                        <li className="nav-item">
                        <a className="btn nav-link" href="/langues">Langues</a>
                        </li>
                        <li className="nav-item">
                        <a className="btn nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
            <div className="d-flex w-75 mx-auto align-items-center">
                <div className="w-25">
                    <img id="profil" src="/profile.jpg" alt="Photo de profil" className="w-50 rounded-circle mb-3"/>
                </div>
                <div className="w-75">
                    <h1 className="mb-5 text-center">Djamel NAADJI</h1>
                    <p className="text-muted"></p>
                </div>
            </div>
     </div>
    );
};

export default Header;
