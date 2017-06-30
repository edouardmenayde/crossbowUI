import {h} from 'preact';
import {
	gql,
	graphql
} from 'react-apollo';
import Service from './service';
import style from './style.less';

const services = ({data: {loading, error, servicesForUser}}) => {
	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error.message}</p>;
	}

	let {services} = servicesForUser;


	return <div class={style.services}>
		{services.map(service => <Service id={service.id} name={service.name}/>)}
	</div>;
};

const servicesForUserQuery = gql`
	query servicesForUser {
		servicesForUser {
			services {
				id,
				name
			}
		}
	}
`;

export default graphql(servicesForUserQuery)(services);
