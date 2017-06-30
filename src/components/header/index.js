import {h, Component} from 'preact';
import {getToken} from '../../lib/auth';
import {Link} from 'preact-router';
import style from './style.less';

export default class Header extends Component {

	renderLoggedIn() {
		return (
			<header class={style.header}>
				<Link href="/dashboard"><h1>Crossbow</h1></Link>
			</header>
		);
	}

	renderLoggedOut() {
		return (
			<header class={style.header}>
				<Link href="/"><h1>Crossbow</h1></Link>
				<nav>
					<Link href="/signin">Sign in</Link>
					<Link href="/signup">Sign up</Link>
				</nav>
			</header>
		);
	}

	render() {
		if (getToken()) {
			return this.renderLoggedIn();
		}

		return this.renderLoggedOut();
	}
}
