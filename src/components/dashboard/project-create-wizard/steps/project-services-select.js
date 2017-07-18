import {h, Component} from 'preact';
import style from '../style.less';
import serviceStyle from '../../style.less';
import {graphql} from 'react-apollo';
import SERVICES_QUERY from '../../../../graphql/queries/services.graphql';
import CREATE_PROJECT_MUTATION from '../../../../graphql/mutations/create-project-mutation.graphql';
import CREATE_TEAM_INVITE_MUTATION from '../../../../graphql/mutations/create-team-invite.graphql';
import Service from '../../service';

@graphql(CREATE_TEAM_INVITE_MUTATION, {name: 'createTeamInvite'})
@graphql(CREATE_PROJECT_MUTATION, {name: 'createProject'})
@graphql(SERVICES_QUERY)
export default class ProjectServicesSelect extends Component {
	constructor(props) {
		super(props);

		this.setState({
			selectedServices: [],
		});
	}

	onClick = service => {
		const {selectedServices} = this.state;

		const isAlreadySelected = selectedServices.find(s => s === service.id);

		if (isAlreadySelected) {
			return this.setState({
				selectedServices: [...selectedServices.filter(s => s !== service.id)],
			});
		}

		this.setState({
			selectedServices: [...selectedServices, service.id],
		});
	};

	submit = event => {
		event.preventDefault();

		const {selectedServices}                             = this.state;
		const {createProject, createTeamInvite, wizardState} = this.props;

		createProject({
			variables: {
				input: {
					name    : wizardState.project,
					services: selectedServices,
				},
			},
		})
			.then(({data: {createProject}}) => {
				return createTeamInvite({
					variables: {
						input: {
							team: createProject.team.id,
						},
					},
				})
					.then(({data: {createTeamInvite: {teamInvite}}}) => {
						this.props.advance({
							teamInvite,
							...createProject,
						});
					});
			})
			.catch(error => {
				console.error(error);
			});
	};

	render({data: {loading, error, services}}, {selectedServices}) {
		if (loading) {
			return <div class={style.container}><p>Loading...</p></div>;
		}

		if (error) {
			return <div class={style.container}><p>{error.message}</p></div>;
		}

		services = services.services;

		if (!services) {
			return;
		}


		/* eslint-disable react/jsx-no-bind */
		return <form onSubmit={this.submit}>
			<div class={serviceStyle.services}>
				{services.map(service => <div onClick={() => this.onClick(service)}><Service data={service}
																																										 selected={!!selectedServices.find(s => s === service.id)}/>
				</div>)}
			</div>
			<input type="submit">Submit</input>
		</form>;
		/* eslint-enable react/jsx-no-bind */
	}
}
