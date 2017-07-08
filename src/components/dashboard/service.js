import {h} from 'preact';
import style from './style.less';
import {LinkButton, LinkedButton} from '../buttons';

export default ({data, data: {name, links}}) => {
	return <div class={style.service}>
		<header class={style.serviceHeader}>
			<h2>{name}</h2>
			{!links.length && <LinkButton data={data}/>}
			{links.length > 0 && <LinkedButton data={data} />}
		</header>
		<hr/>
		<p class={style.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>;
};
