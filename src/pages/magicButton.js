//import React from 'react'
//import { useState } from 'react'
//import { ReactDOM } from 'react';

/*
function Magic() {

   // let [decision, setDecision] = useState('Ask a question and click for an answer?')
   //const [reply, setAnswer] = useState(0);
   //const btnEight = document.getElementById('eightBall')
    const element = React.createElement( 'eightBall', {

    })
    const [answer]  = useState( [  
                        'Yes', 
                        'No', 
                        'Outlook not so certain',
                        'Maybe', 
                        'Not sure', 
                        'Ask again later', 
                        'Do not count on it',
                        'Possibly',
                        'Outlook looks good',
                        'Most likely',
                        'It will happen',
                        'Very doubtful'
                    ])
       return (
        <>
    <div>
    
        {answer.map( (ans, index)=>
            (<p key={index}>{ans}</p>)
        )}
        
        </div>
        </>
       )
}

export default Magic 
*/








//This code works so leave it alone!!!


function Magic() {
       
        const decision = [  'Yes', 
                            'No', 
                            'Outlook not so certain',
                            'Maybe', 
                            'Not sure', 
                            'Ask again later', 
                            'Do not count on it',
                            'Possibly',
                            'Outlook looks good',
                            'Most likely',
                            'It will happen',
                            'Very doubtful',
                            'It will happen'
                        ];
       let reply = decision[Math.floor(Math.random()* 12)];

        const btn = document.querySelector('#magic');

        function updateButton() {
            if (btn.textContent === 'Click Answer?') {
                return btn.textContent = reply;
            } else if ( btn.textContent === reply) {
                return btn.textContent = 'Click Answer?';
            } else {
               return btn.textContent = 'Click Answer?'
            }
        }
        updateButton();

    
}

export default Magic

