import {h} from 'preact';
import Teams from './teams';
import Projects from './projects';

export default () => {
    return (
        <div className="dashboard">
            <div className="container">
                <Teams/>
                <Projects/>
            </div>
        </div>
    );
};


