import {h} from 'preact';
import Badge from '../badge';
import Project from '../project';

export default () => {
    return (
        <div id="projects">
            <div className="wrapper">
                <div className="heading">Projects
                    <div className="badge">
                        <Badge data={{number: 5, text: "maisons"}}/>
                        <Badge data={{number: 2, text: "briques"}}/>
                        <Badge data={{number: 1, text: "chat"}}/>
                    </div>
                </div>
                <div className="content">
                    <Project
                        data={{name: "Project name", description: "Project name", picture: "picture"}}/>
                    <Project
                        data={{name: "Project name", description: "Project name", picture: "picture"}}/>
                    <Project
                        data={{name: "Project name", description: "Project name", picture: "picture"}}/>
                    <Project
                        data={{name: "Project name", description: "Project name", picture: "picture"}}/>
                    <Project
                        data={{name: "Project name", description: "Project name", picture: "picture"}}/>
                    <Project
                        data={{name: "Project name", description: "Project name", picture: "picture"}}/>
                    <Project
                        data={{name: "Project name", description: "Project name", picture: "picture"}}/>
                </div>
            </div>
        </div>
    );
};
