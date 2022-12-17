const quiz = [
    {quest: 'Which day is Halloween in 2022?',
    ans:
    [ {ans1: 'Monday, 31 October', isCorrect: true},
    {ans2: 'Sunday, 30 October', isCorrect: false},
    {ans3: 'Tuesday, 01 November', isCorrect: false},
    {ans4: 'Wednesday, 02 November',isCorrect: false}]       
    },
    {quest: 'What is the name of the pot witches use to cook up their potions?',
    ans:
    [ {ans1: 'Magic cooking pot', isCorrect: false},
    {ans2: 'Cauldron', isCorrect: true},
    {ans3: 'Black pot', isCorrect: false},
    {ans4: 'Wok',isCorrect: false}]
    },
    {quest: 'Where does the term "jack o\'lantern" come from?',
    ans:
    [{ans1: 'from a Swedish village', isCorrect: false},
    {ans2: 'from an Irish folktale', isCorrect: true},
    {ans3: 'from an Icelandic lake', isCorrect: false},
    {ans4: 'None of them', isCorrect: false}]
    }, 
    {quest: 'When was Halloween first celebrated in the United States?',
    ans:
    [{ans1: '1778', isCorrect: false},
    {ans2: '1840', isCorrect: true},
    {ans3: '1914', isCorrect: false},
    {ans4: '1960', isCorrect: false}]
    },
    {quest: 'Why did people start dressing up in Halloween costumes?',
    ans:
    [{ans1: 'because it is fun', isCorrect: false},
    {ans2: 'to disguise themselves when the spirits come', isCorrect: true},
    {ans3: 'to see the otherworld', isCorrect: false},
    {ans4: 'to repel spirits that they believed came back to Earth', isCorrect: false}]
    },
    {quest: 'What vegetable is part of a tradition on the night before Halloween?',
    ans:
    [{ans1: 'Pepper', isCorrect: false},
    {ans2: 'Cucumber', isCorrect: false},
    {ans3: 'Cabbage(Kale)', isCorrect: true},
    {ans4: 'Pumpkin', isCorrect: false}]
    },
    {quest: 'Why do some people wear clothes inside out on Halloween?',
    ans:
    [{ans1: 'to see a witch at midnight', isCorrect: true},
    {ans2: 'to transform into an animal', isCorrect: false},
    {ans3: 'to save the planet', isCorrect: false},
    {ans4: 'to make a deal with the devil', isCorrect: false}]
    },
    {quest: 'What is the most commercially successful horror movie of all time?',
    ans:
    [{ans1: 'Paranormal Activity', isCorrect: false},
    {ans2: 'Deliver Us from Evil', isCorrect: false},
    {ans3: 'Alien', isCorrect: false},
    {ans4: 'It', isCorrect: true}]
    },
    {quest: 'What was used before pumpkins to make jack o\'lanterns?',
    ans:
    [{ans1: 'Watermelon', isCorrect: false},
    {ans2: 'Beetroots', isCorrect: false},
    {ans3: 'Onions', isCorrect: false},
    {ans4: 'Potatoes', isCorrect: true}]
    },
    {quest: 'What does the black cat symbolize?',
    ans:
    [{ans1: 'Power and strength', isCorrect: false},
    {ans2: 'Life and death', isCorrect: false},
    {ans3: 'Mystery and secrecy', isCorrect: true},
    {ans4: 'Freedom and vanity', isCorrect: false}]
}
];

var i=0;
function getNewQuestion(i) {
  const question = document.getElementById('question');
  question.innerText= quiz[i].quest

  const answer1 = document.getElementById('ans1');
  const answer2 = document.getElementById('ans2');
  const answer3 = document.getElementById('ans3');
  const answer4 = document.getElementById('ans4');

  answer1.innerText = quiz[i].ans[0].ans1;
  answer2.innerText = quiz[i].ans[1].ans2;
  answer3.innerText = quiz[i].ans[2].ans3;
  answer4.innerText = quiz[i].ans[3].ans4;
}
getNewQuestion(i)