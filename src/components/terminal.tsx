import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { ReactTerminal } from 'react-terminal';

const RomanTerminal: FunctionComponent = (): ReactElement => {
    // Define commands here
    const commands = {
        whoami: 'Jacob Roman',
        help: (
            <span>
                <span>Commands:</span>
                <br />
                <br />

                <span>VARIABLES</span>
                <br />
                <span style={{ marginLeft: '20px' }}>
                    <strong>about</strong> -- know more about me
                </span>
                <br />
                <span style={{ marginLeft: '20px' }}>
                    <strong>resume</strong> -- want to have a look at my resume?
                </span>
                <br />
                <span style={{ marginLeft: '20px' }}>
                    <strong>contact</strong> -- want to get in touch?
                </span>
                <br />
                <br />

                <span>FUNCTIONS</span>
                <br />
                <span style={{ marginLeft: '20px' }}>
                    <strong>experience()</strong> -> float
                </span>
                <br />
                <span style={{ marginLeft: '40px' }}>
                    returns the total years of working experience
                </span>
                <br />
            </span>
        ),
        contact: (
            <span>follow me on <Link to="https://twitter.com/romanbytes" target="_blank">twitter</Link> or <Link to="/contact" className="underline text-romanPrimary">send me an email</Link></span>
        ),
        about:
            'Javascript Developer, Accessibility Advocate, and Team player. I am always seeking opportunities to learn and grow. I am a simple guy who loves all things tech and a good cup of coffee. Nice to meet you.',
        resume: (
            <span>
                You can{' '}
                <a
                    target="_blank"
                    aria-label="Resume"
                    rel="noreferrer"
                    href="jacob-roman-resume.pdf"
                    className="underline text-romanPrimary"
                >
                    download my resume here
                </a>
            </span>
        ),
        'experience()': () => {
            const difDate = new Date() - new Date('2010-10-01');
            const experience: string = (difDate /
                1000 /
                60 /
                60 /
                24 /
                365
            ).toFixed(1);
            return `${experience} years`;
        },
    };

    const welcomeMessage = (
        <span>
            Type "help" for more information. <br />
        </span>
    );

    return (
        <div className="hidden lg:flex justify-center fixed top-1/2 w-800 h-460 transform -translate-y-1/2">
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
