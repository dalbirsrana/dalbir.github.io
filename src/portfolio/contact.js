import React from 'react';

const About = () => {

    return (
        <section className="section-contact">
            
            <h1 className="content-heading">Get in touch!</h1>

            <div className="container-contact">
                <p>
                    <a href="mailto:dalbirsrana@gmail.com">
                        <i className="far fa-envelope icon"></i>  dalbirsrana@gmail.com
                    </a>
                </p>

                <p>
                    <a href="tel:+1.236.987.8514">
                        <i className="fas fa-mobile-alt icon"></i> +1.236.987.8514
                    </a>
                </p>

                <p>
                    <a href="https://www.linkedin.com/in/dalbirsrana/">
                    <i className="fab fa-linkedin-in icon"></i> linkedin.com/in/dalbirsrana/
                    </a>
                </p>


            </div>
        </section>
    )
}

export default About