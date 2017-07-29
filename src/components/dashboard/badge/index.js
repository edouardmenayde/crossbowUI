import {h} from 'preact';
import style from './style.less';

export default ({data: {number, text}}) => {
    return (
        <div class={style.counter}>{number} {text}</div>
    );
};
