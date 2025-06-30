import '../assets/css/About.css';
import IconCamera from '../assets/img/IconCamera.png';
import IconDownload from '../assets/img/IconDownload.png';
import IconFilter from '../assets/img/IconFilter.png';
import IconFree from '../assets/img/IconFree.png';
import IconGrid from '../assets/img/IconGrid.png';
import IconShare from '../assets/img/IconShare.png';
import logo from '../assets/img/LogoDifoto.png'

const features =[
{ icon: IconCamera, title: 'Instant Capture', desc: 'Take photos instantly with your webcam. No setup required.' },
  { icon: IconGrid, title: 'Fun Templates', desc: 'Choose from multiple photobooth strip layout to match your style.' },
  { icon: IconFilter, title: 'Creative Filters', desc: 'Apply artistic filters to make your photos unique and memorable.' },
  { icon: IconDownload, title: 'Easy Download', desc: 'Download your photostrip instantly. No account or sign up needed.' },
  { icon: IconShare, title: 'Share Ready', desc: 'Perfect for social media sharing and creating lasting memories.' },
  { icon: IconFree, title: 'Completely Free', desc: 'No hidden fees, no subscription. Just pure photobooth fun!' },
];

export default function About(){
    return(
        <section className='about-page'>
            <h2>Why Choose
                <img src={logo} alt="DI FOTO" className="inline-logo"/>
            </h2>
            <div className="features-grid">
                {features.map(({icon, title, desc}) => (
                    <div className='feature-card' key={title}>
                        <img src={icon} alt={title} className='feature-icon' />
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}