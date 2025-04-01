import Portfolio from '../Compoments/Portfolio';
import Testminial from '../Compoments/Testminial';
import Technology from '../Compoments/Technology';
import ContactUs from '../Compoments/ContactUs';
import { PortfolioMeta } from '../Compoments/MetaTag';

const PortfolioPage = () => {
	return (
		<>
			<PortfolioMeta />
			<Portfolio />
			<Testminial />
			<Technology />
			<ContactUs />
		</>
	);
};

export default PortfolioPage;
