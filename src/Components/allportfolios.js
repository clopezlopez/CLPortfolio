import studiocromah from '../img/portImages/studio-cromah.png';
import balsamstreet from '../img/portImages/balsam-street.PNG';
import balsamstreetClient from '../img/portImages/balsam-street-client.PNG';
import viewportsites from '../img/portImages/viewportsites.PNG';
import ecommerce from '../img/portImages/ecommerce.PNG';
import horticultureindustries from '../img/portImages/horticultureindustries.PNG';
import accentsonbeauty from '../img/portImages/accentsonbeauty.PNG';
import daycare from '../img/portImages/daycare.PNG';
import { FaGithub } from 'react-icons/fa';
import { ImWordpress } from 'react-icons/im';



const portfolios = [
    
    {
        id: 1,
        category: 'Clients',
        link1: 'https://trustydaycare.com/',
        iconlink2: <ImWordpress className='wp' />,
        image: daycare,
        title: 'Trusty Daycare',
        description: 'A WordPress site with a custom design and dynamic content. Using Elementor with Crocoblock premium plugings. * Currently Under Development *'
    },
    
    {
        id: 2,
        category: 'Projects',
        link1: 'https://balsamstreetchurch.netlify.app/',
        link2: 'https://github.com/clopezlopez/balsam-street',
        iconlink2: <FaGithub className="gh" />,
        image: balsamstreet,
        title: 'Balsam-Street Church',
        description: 'Single page website with a simple design for a local church developed with React-Bootstrap'  
    },

    {
        id: 3,
        category: 'Projects',
        link1: 'https://studiocromah.netlify.app/',
        link2: 'https://github.com/clopezlopez/cromahwebsite',
        image: studiocromah,
        title: 'Studio Cromah',
        description: 'Multipage portfolio developed with HTML, CSS, and Javascript. * Currently Under Development *',
        iconlink2: <FaGithub className="gh" />,
    },

    {
        id: 4,
        category: 'Clients',
        link1: 'https://accentsonbeauty.com/',
        image: accentsonbeauty,
        title: 'Accentson Beauty',
        description: 'Hairsalon website built using the LiveCanvas theme, HTML, SASS, Javascript, Php, along with a few plugings. * Currently Under Development *',
        iconlink2: <ImWordpress className='icon' />,
    },
    {
        id: 5,
        category: 'Clients',
        link1: 'https://horticultureindustries.com/',
        image: horticultureindustries,
        title: 'Horticulture Industries',
        description: 'Horticulture company website built using the LiveCanvas theme, HTML, SASS, Javascript, PHP. * Currently Under Development *',
        iconlink2: <ImWordpress className='wp' />,
    },
    {
        id: 6,
        category: 'Clients',
        link1: 'https://balsamstreetchristianchurch.com/',
        image: balsamstreetClient,
        title: 'Balsam Street Church',
        description: 'Church website built using the Live Canvas theme, HTML, SASS, Javascript, PHP. * Currently Under Development *',
        iconlink2: <ImWordpress className='wp' />,
    },

    {
        id: 7,
        category: 'Clients',
        link1: 'https://viewportsites.com/',
        image: viewportsites,
        title: 'Viewport Sites',
        description: 'Web Agency site built using the Live Canvas theme, HTML, SASS, Javascript, PHP',
        iconlink2: <ImWordpress className='wp' />,
    },

    {
        id: 8,
        category: 'Clients',
        link1: 'https://camilol59.sg-host.com/',
        image: ecommerce,
        title: 'Baby Store',
        description: 'Ecommerce site built using the Live Canvas theme, HTML, SASS, Javascript, PHP, woocommerce, and a few premium plugins',
        iconlink2: <ImWordpress className='wp' />,
    },

    
]

export default portfolios;