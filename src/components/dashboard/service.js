import {h} from 'preact';
import style from './style.less';
import Button from '../button';

const service = ({name}) => {
	return <div class={style.service}>
		<header class={style.serviceHeader}>
			<h2>{name}</h2>
			<Button name="Link"/>
		</header>
		<hr/>
		<p class={style.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>;
};

export default service;
