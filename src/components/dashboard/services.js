import {h} from 'preact';
import {graphql} from 'react-apollo';
import Service from './service';
import style from './style.less';
import SERVICES_FOR_USER_QUERY from '../../graphql/queries/services-for-user.graphql';

const services = ({data: {loading, error, servicesForUser}}) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    let {services} = servicesForUser;

    if (!services) {
        return;
    }

    return <div class={style.services}>
        {services.map(service => <Service data={service}/>)}
    </div>;
};

export default graphql(SERVICES_FOR_USER_QUERY)(services);
