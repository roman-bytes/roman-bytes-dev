import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { ReactTerminal } from 'react-terminal';

const RomanTerminal: FunctionComponent = (): ReactElement => {
    // Define commands here
    const commands = {
        whoami: 'Jacob Roman',
        "help": (
            <span>
                <span>Commands:</span><br/><br/>

                <span>VARIABLES</span><br/>
                <span style={{ marginLeft: "20px" }}><strong>roman.about</strong> -- know more about me</span><br/>
                <span style={{ marginLeft: "20px" }}><strong>roman.resume</strong> -- want to have a look at my resume?</span><br/><br/>

                <span>FUNCTIONS</span><br/>
                <span style={{ marginLeft: "20px" }}><strong>roman.experience()</strong> -> float</span><br/>
                <span style={{ marginLeft: "40px" }}>returns the total years of working experience</span><br/>
            </span>
        ),
        "roman.about": "My name is Jacob Roman and I like to do cool things",
        "roman.resume": (
            <span>
                <a target="_blank" aria-label="Resume" rel="noreferrer" href="public/static/resume.pdf">resume.pdf</a>
            </span>
        ),
        "roman.experience()": () => {
            const experience = ((new Date() - new Date("2014-10-01")) / 1000 / 60 / 60 / 24 / 365).toFixed(1)
            return `${experience} years`
        },
    };

    const welcomeMessage = (
        <span>
            Type "help" for more information. <br />
        </span>
    );

    return (
        <div className="flex justify-center fixed top-1/2 w-800 h-460 transform -translate-y-1/2">
            <ReactTerminal
                commands={commands}
                theme="dark"
                prompt="$"
                welcomeMessage={welcomeMessage}
            />
        </div>
    );
};

export default RomanTerminal;
