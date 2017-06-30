import {h} from 'preact';
import MdAdd from 'react-icons/lib/md/add';
import style from './style.less';

const Button = ({name}) => {
	return <a class={style.button} href="#" role="button">
		<span>{name}</span>
		<div class={style.icon}>
			<MdAdd />
		</div>
	</a>;
};

export default Button;
