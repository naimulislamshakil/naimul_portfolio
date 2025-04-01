import Banner from '../Compoments/Banner';
import AboutMe from '../Compoments/AboutMe';
import WhyChoseMe from '../Compoments/WhyChoseMe';
import Count from '../Compoments/Count';
import Service from '../Compoments/Service';
import Portfolio from '../Compoments/Portfolio';
import Testminial from '../Compoments/Testminial';
import ContactUs from '../Compoments/ContactUs';
import Technology from '../Compoments/Technology';
import { HomeMeta } from '../Compoments/MetaTag';
import SchemaMarkup from '../Compoments/SchemaMarkup';

const HomePage = () => {
	return (
		<>
			<SchemaMarkup />
			<HomeMeta />
			<Banner />
			<AboutMe />
			<WhyChoseMe />
			<Count />
			<Service />
			<Portfolio />
			<Testminial />
			<Technology />
			<ContactUs />
		</>
	);
};

export default HomePage;
