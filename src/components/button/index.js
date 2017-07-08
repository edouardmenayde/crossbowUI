import {h} from 'preact';
import style from './style.less';

const Button = ({name, children}) => {
	return <a class={style.button} href="#" role="button">
		<span>{name}</span>
		<div class={style.icon}>
			{children}
		</div>
	</a>;
};

export default Button;
