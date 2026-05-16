export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">("Hello World"), I am
JASLEEN KAUR</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">A Full Stack</span>{" "}
                        <br></br>
                        Developer
                    </h1>
                    <p className="hero--section--description">I'm a 4th-year Computer Science and Engineering student at GGSIPU, New Delhi.

<br></br>
                    </p>
                    </div>
                    <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="my pic"></img>
                
            </div>
        </section>
    );
}
