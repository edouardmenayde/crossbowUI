import {h, Component} from 'preact';
import QRCode from 'qrcode.react';

export default class ProjectTeamCreate extends Component {
	render({wizardState}) {

		const link = `http://localhost:8080/signup?invitation=${wizardState.teamInvite.token}`;

		return <div>
			<br/>
			<QRCode value={link} size="256" />
			<p>Share this link <code>{link}</code></p>
		</div>;
	}
}
