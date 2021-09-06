import React from 'react';
import './App.css';
import Greeting from './components/greeting';
import SelfCounter from './components/selfCounter';
import Story from './components/story';


function App() {
  return (
    <div className="App">
     {/* <Greeting userName = 'AbdulSaboor' /> */}
     {/* <Story heading="Kids Story – Short stories for kids" title="THE FROG WHOSE BELLY BURST (SHORT FUNNY STORY)
" para="Short Funny Story For Kids A short funny story for kids is the best way to bring joy to your child’s day. It will make them laugh and tell their parents about it. Children would instead take a bath than listen to a long, drawn-out fairy tale. You will be a hit with your neighborhood […]
" />
     <Story  title="THE SLEEPING BEAUTY SHORT STORY" para="This is the Sleeping Beauty Short Story. Once upon a time, a beautiful girl was born to the king and queen in a faraway land. Fairies from all over were invited to the celebrations. They brought with them unique gifts and blessed the little princess to become a clever, beautiful, and kind girl. Just then, a […]
" />
     <Story  title="20 BEST SHORT STORIES WITH A MORAL ​LESSONS FOR KIDS" para="stories with a moral When it comes to teaching kids a valuable moral lesson, most parents turn to short stories. It not only piques their interest, but it also teaches children valuable life lessons. Short stories have a unique method of imparting knowledge that makes them more accessible and engaging. Rather than simply reminding your […]" /> */}

     <SelfCounter />

    </div>
  );
}

export default App;
