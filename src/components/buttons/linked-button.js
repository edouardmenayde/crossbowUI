import {h, Component} from 'preact';
import Button from '../button';
import MdRemove from 'react-icons/lib/md/remove';
import UNLINK_SERVICE_MUTATION from '../../graphql/mutations/unlink-service-mutation.graphql';
import SERVICES_FOR_USER from '../../graphql/queries/services-for-user.graphql';
import {graphql} from 'react-apollo';

@graphql(UNLINK_SERVICE_MUTATION)
export default class UnlinkButton extends Component {
	handleClick = () => {
		const {mutate, data: {links}} = this.props;

		return mutate({
			refetchQueries: [{
				query: SERVICES_FOR_USER,
			}],
			variables     : {
				input: {
					serviceLink: links[0].id,
				},
			},
		}).catch(error => {
			console.error(error);
		});
	};

	render() {
		return <Button name="Unlink">
			<MdRemove onClick={this.handleClick}/>
		</Button>;
	}
}
