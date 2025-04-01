import Service from '../Compoments/Service';
import Portfolio from '../Compoments/Portfolio';
import Testminial from '../Compoments/Testminial';
import Technology from '../Compoments/Technology';
import ContactUs from '../Compoments/ContactUs';
import { ServicesMeta } from '../Compoments/MetaTag';

const ServicePage = () => {
	return (
		<>
			<ServicesMeta />
			<Service />
			<Portfolio />
			<Testminial />
			<Technology />
			<ContactUs />
		</>
	);
};

export default ServicePage;
