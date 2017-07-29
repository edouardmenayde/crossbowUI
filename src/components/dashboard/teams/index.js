import {h} from 'preact';
import Team from '../team';
import Badge from '../badge';

export default () => {
    return (
        <div id="teams">
            <div className="wrapper">
                <div className="heading">Teams
                    <div className="badge">
                        <Badge data={{number: 5, text: "maisons"}}/>
                    </div>
                </div>
                <div className="content">
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                    <Team data={{
                        name       : "Team name LTD.",
                        description: "The official best team.",
                        picture    : "picture",
                    }}/>
                </div>
            </div>
        </div>
    );
};
