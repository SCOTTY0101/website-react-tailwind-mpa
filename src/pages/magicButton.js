//import React, { useState, useEffect } from 'react'
//import { ReactDOM } from 'react';

/*
function Magic() {

   // let [decision, setDecision] = useState('Ask a question and click for an answer?')
   const [reply, setAnswer] = useState(0);

  const answer  = [  
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
                    ];
        //const [reply, setAnswer] = useState(0);

        const randomAnswer = e => {
           // const len = answer.length;
           setAnswer( Math.floor( Math.random() * 12 ));
        }  
   


   
    function updateButton() {
         const btn = document.querySelector('#magic');
        if (btn.textContent === 'Ask a question and click for an answer?') {
            return btn.textContent = reply;
        } else if ( btn.textContent === reply) {
            return btn.textContent = 'Ask a question and click for an answer?';
        } else {
            return btn.textContent = 'Ask a question and click for an answer?'
        }
    }
    updateButton();
    
}

export default Magic

*/


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
                            'Very doubtful'
                        ];
       let reply = decision[Math.floor(Math.random()* 12)];

        const btn = document.querySelector('#magic');

        function updateButton() {
            if (btn.textContent === 'Ask a question and click for an answer?') {
                return btn.textContent = reply;
            } else if ( btn.textContent === reply) {
                return btn.textContent = 'Ask a question and click for an answer?';
            } else {
               return btn.textContent = 'Ask a question and click for an answer?'
            }
        }
        updateButton();

    
}

export default Magic

