import {h, Component} from 'preact';
import {Wizard} from '../../../lib/wizard';
import ProjectNameInputStep from './steps/project-name-input';
import ProjectServicesSelect from './steps/project-services-select';
import ProjectTeamCreate from './steps/project-team-create';

export default class ProjectCreateWizard extends Component {
	render() {
		return <Wizard steps={[ProjectNameInputStep, ProjectServicesSelect, ProjectTeamCreate]}/>;
	}
}
