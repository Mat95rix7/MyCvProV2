const Experiences = () => {
    return (
        <div id="experiences" className="m-5 col-10 mx-auto">
            <h2 className="my-5 text-center">EXPERIENCES</h2>
            <div className="accordion" id="experienceAccordion">
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Développement Web et Web Mobile
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#experienceAccordion">
                        <div className="accordion-body">
                            <p><strong>2023-2024 : AFEC - Maisons-Laffite 78</strong></p>
                            <p>Développement des projet en partant du maquettage, back et front (Javascript) avec, hébergement (git) et en utilisant des bases de données (Mysql, MongoDB).</p>
                        </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Technicien Fibre
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#experienceAccordion">
                        <div className="accordion-body">
                            <p><strong>2014-2022 : EXCELE - Osny 95</strong></p>
                            <p>Installation du réseau optique et éthernet aux usagers professionnels raccordement, mise en service, contrôle qualité et maintenance.</p>
                        </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Technicien maintenance
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#experienceAccordion">
                        <div className="accordion-body">
                            <p><strong>2005-2012 : EXCELE - Osny 95</strong></p>
                            <p>Maintenance préventive des équipements et installations. Diagnostic de panne, réparation des équipements. Entretien courant et dépannage des équipements sur les sites clients.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Technicien HelpDesk
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#experienceAccordion">
                        <div className="accordion-body">
                            <p><strong>1996-2002 : PC Home - Algérie</strong></p>
                            <p>Assistance technique sur place et à distance. Installation et maintenance du matériels. Installation et mise à jour logiciels.</p>
                        </div>
                    </div>
                </div>
    
    
            </div>
        </div>
    );
};

export default Experiences;