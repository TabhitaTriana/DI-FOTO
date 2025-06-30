import '../assets/css/Contact.css'
import logo from '../assets/img/LogoDifoto.png';

export default function Contact(){
    return(
        <>
            <section className='Contact-page'>
                <h1>Get in Touch</h1>
                <p>Have questions about DI FOTO? Need help with your photobooth experience?</p>
                <p>We’d love to hear from you! Send us a message and we’ll get back to you as soon as possible.</p>
            </section>
            <div className='Contact-grid'>
                <div className='Faq-grid'>
                    <h2>Frequently Asked Questions</h2>
                    <h3>How do i Download my photos?</h3>
                    <p>After taking your photos and applying filters, 
                    simply click the download button to save your photostrip</p>
                    <h3>What browsers are suported?</h3>
                    <p>
                        <img src={logo} alt="DI FOTO" className="inline-logo"/> works best on modern
                        browsers like Chrome, Firefox, Safari, and Edge with webcam access.
                        </p>
                    <h3>Is my data stored?</h3>
                    <p>Your photos are procdessed locally and only temporarily
                        stored to create your photostrip. No personal data is retained.
                    </p>
                </div>
                <div className='Message-grid'>
                    <h2>Send us a Message</h2>
                    <form>
                    <label>
                        Your Name
                        <input type="text" placeholder="Enter your full name" required />
                    </label>
                    <label>
                        Email Address
                        <input type="email" placeholder="Enter your email address" required />
                    </label>
                    <label>
                        Message
                        <textarea placeholder="Tell us how we can help you or share your feedback..." required></textarea>
                    </label>
                    <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}