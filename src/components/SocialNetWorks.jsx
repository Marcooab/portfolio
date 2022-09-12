import { FaLinkedinIn, FaGithub, FaInstagram,  FaFacebookSquare } from "react-icons/fa"

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", link: "https://www.linkedin.com/in/marco-aurelio-ricardo-8427b2238/" ,  icon: <FaLinkedinIn /> },
    { name: "github", link: "http://www.github.com/Marcooab", icon: <FaGithub /> },
    { name: "instagram", link:"https://www.instagram.com/marcoaurelioricardo/", icon: <FaInstagram /> },
    { name: "facebook", link:"https://www.facebook.com/marcoaurelio.ricardo.5", icon: <FaFacebookSquare/> },
];

const SocialNetworks = () => {
    return (
    <section id="social-networks">
        {socialNetworks.map((network) => (  
            <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
            </a>
        ))}
    </section>
    )
};

export default SocialNetworks 