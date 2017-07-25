import {h, Component} from 'preact';
import {Link} from 'preact-router';
import {graphql} from 'react-apollo';
import ME_QUERY from '../../graphql/queries/me.graphql';
import style from './style.less';

@graphql(ME_QUERY)
export default class Header extends Component {
	renderLoggedIn() {
		return (
			<header class={style.header}>
				<Link href="/dashboard"><h1>Crossbow</h1></Link>
				<nav>
					<Link href="/signout">Sign Out</Link>
				</nav>
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

	render({data: {loading, error, me}}) {
		if (loading) {
			return this.renderLoggedOut();
		}

		if (error) {
			console.error(error);

			return this.renderLoggedOut();
		}

		if (me && me.user) {
			return this.renderLoggedIn();
		}

		return this.renderLoggedOut();
	}
}
