import {h} from 'preact';
import style from './style.less';
import {LinkButton, LinkedButton} from '../buttons';

export default ({data, data: {name, links}, selected}) => {
	const serviceClass = selected ? style.selectedService: style.service;

	return <div class={serviceClass}>
		<header class={style.serviceHeader}>
			<h2>{name}</h2>
			{links && !links.length && <LinkButton data={data}/>}
			{links && links.length > 0 && <LinkedButton data={data} />}
		</header>
		<hr/>
		<p class={style.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>;
};
