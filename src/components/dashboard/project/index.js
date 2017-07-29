import {h} from 'preact';
import style from './style.less';

export default ({data: {name, description}}) => {
    return (
        <div class={style.projectItem}>
            <div class={style.projectHeader}>
                <div class={style.aside}>
                    <div class={style.projectPicture} style="backroung-image:url('')"/>
                </div>
                <div class={style.wrapper}>
                    <div class={style.heading}>{name}</div>
                    <div class={style.description}>{description}</div>
                </div>
            </div>
            <div class={style.projectBody}>
                <div class={style.left}/>
                <div class={style.right}/>
            </div>
        </div>);
};
