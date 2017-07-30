import {h, Component} from 'preact';
import {Link} from 'preact-router';
import {graphql} from 'react-apollo';
import ME_QUERY from '../../graphql/queries/me.graphql';
import style from './style.less';

@graphql(ME_QUERY)
export default class Header extends Component {
    renderLoggedIn() {
        return (
            <div class={style.accountPanel}>
                <div class={style.container}>
                    <div class={style.branding}><Link href="/">Crossbow</Link></div>
                    <div class={style.divider}/>
                    <div class={style.profilePicture}/>
                    <div class={style.profileName}>John Doe</div>
                    <div class={style.divider}/>
                    <div class={style.management}>
                        <div class={style.account}>🙄 Account</div>
                        <div class={style.preferences}>⚙️ Preferences</div>
                        <div class={style.logout}>🚪 Logout</div>
                    </div>
                </div>
            </div>
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
            return;
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
