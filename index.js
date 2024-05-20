const Quotes = [
    { 

     'quote': 'Be the change that you wish to see in the world.',
     'author': 'Mahatma Gandhi'

    },
 
    { 

     'quote': 'Those who do not want when they can, cannot when they want .',
     'author': 'Jean de La Fontaine'

    },
 
    { 

     'quote': 'Don’t walk in front of me… I may not follow Don’t walk behind me… I may not leadWalk beside me… just be my friend.',
     'author': 'Albert Camus'
     

    },
 
    { 

     'quote': 'If you tell the truth, you don’t have to remember anything.',
     'author': 'Mark Twain'

    },
 
    { 

     'quote': 'The marks humans leave are too often scars.',
     'author': 'John Green'

    },
 
    { 

     'quote': 'Remember, we’re madly in love, so it’s all right to kiss me anytime you feel like it',
     'author': 'Suzanne Collins'

    },
 
    { 

     'quote': 'Some day you will be old enough to start reading fairy tales again.',
     'author': 'C.S. Lewis'

    },
 
    { 

     'quote': 'To die will be an awfully big adventure.',
     'author': 'J.M. Barrie'

    },
 
    { 

     'quote': 'Books are a uniquely portable magic.',
     'author': ' Stephen King'

    },
 
    { 

     'quote': 'Anyone who has never made a mistake has never tried anything new.',
     'author': 'Albert Einstein'

    },
 
    { 

     'quote': 'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.',
     'author': 'Mark Twain'

    },
 
    { 

     'quote': 'A question that sometimes drives me hazy: am I or are the others crazy?',
     'author': 'Albert Einstein'

    },
 
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*Quotes.length + 1);
    document.querySelector('#quote').textContent = `\"${Quotes[random].quote}\"`;
    document.querySelector('#author').textContent = `(${Quotes[random].author})`;
    
}
