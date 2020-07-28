import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { ReactTerminal } from 'react-terminal';

const RomanTerminal: FunctionComponent = (): ReactElement => {
    // Define commands here
    const commands = {
        whoami: 'jackharper',
        cd: (directory) => `changed path to ${directory}`,
    };

    return (
        <div className="flex justify-center items-center fixed top-1/2">
            <ReactTerminal commands={commands} />
        </div>
    );
};

export default RomanTerminal;
