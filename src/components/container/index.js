import {h, Component} from 'preact';
import style from './style.less';

export default class Container extends Component {
    render() {
        return (
            <div class={style.container}>{this.props.children}</div>
        );
    }
}
