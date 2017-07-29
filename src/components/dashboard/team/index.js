import {h} from 'preact';
import style from './style.less';

export default ({data: {name, description, picture}}) => {
    return (
        <div class={style.teamItem}>
            <div class={style.aside}>
                <div class={style.teamPicture}></div>
            </div>
            <div class={style.main}>
                <div class={style.teamName}>{name}</div>
                <div class={style.teamDescription}>{description}
                </div>
            </div>
        </div>
    );
};
