const Contact = () => {
    return (
        <>
        <div id="contact" className="m-5 col-10 mx-auto">
            <h2 className="my-5 text-center">CONTACT</h2>
            <form id="contactForm" action="/message" method="post">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" name="name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
            <p id="confirmation" className="mt-3 text-success d-none">Message envoyé avec succès !</p>
        </div>
     </>
    );
};

export default Contact;