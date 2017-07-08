import {h, Component} from 'preact';
import Button from '../button';
import MdAdd from 'react-icons/lib/md/add';
import {authorize as authorizeTrello} from '../../lib/trello';
// import {authorize as authorizeGoogle} from '../../lib/google';
import LINK_SERVICE_MUTATION from '../../graphql/mutations/link-service-mutation.graphql';
import SERVICES_FOR_USER from '../../graphql/queries/services-for-user.graphql';
import {graphql} from 'react-apollo';

@graphql(LINK_SERVICE_MUTATION)
export default class LinkButton extends Component {
	handleClick = () => {
		const {mutate, data: {name, id}} = this.props;

		switch (name) {
			case 'Trello':
				return authorizeTrello()
					.then(token => {
						return mutate({
							refetchQueries: [{
								query: SERVICES_FOR_USER
							}],
							variables     : {
								input: {
									service    : id,
									type       : 'oauth1',
									accessToken: token,
									expiresIn  : -1 // Never
								}
							}
						});
					})
					.catch(error => {
						console.error(error);
					});
			// case 'Google Drive':
			// 	return authorizeGoogle();
		}
	};

	render() {
		return <Button name="Link">
			<MdAdd onClick={this.handleClick}/>
		</Button>;
	}
}
