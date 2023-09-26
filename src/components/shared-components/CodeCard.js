import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles/CodeCard.scss';

function CodeCard (){
    const codeString = 
`// criando um hello world

function helloWorld(){
    return "Hello World!";
}

console.log(helloWorld());
`;

    return <div className="code-card">
        <SyntaxHighlighter
            showLineNumbers={true}
            customStyle={{ backgroundColor: '#1d2125',  borderRadius: "12px"}}
            language="javascript" 
            style={dracula} 
        >
      {codeString}
    </SyntaxHighlighter>
    </div>;
}

export default CodeCard;