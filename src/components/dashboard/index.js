import {h} from 'preact';
import Services from './services';
import Teams from './teams';
import Projects from './projects';

export default () => {
	return (
		<div>
			<Services/>

			<div id="crossbow">
				<div className="container">
					<Teams/>
					<Projects/>
				</div>
			</div>
		</div>
	);
};


