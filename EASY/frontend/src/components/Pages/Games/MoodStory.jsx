import React, { useState } from 'react';
import './MoodStory.css';

// Story elements with different branches based on user choices
const Story = ({ onChoice }) => {
  const [step, setStep] = useState(0);

  // Define the story structure with mood-related weights
  const story = [
    {
      text: 'You wake up in a forest. It’s a beautiful day with birds chirping. What do you do?',
      choices: [
        { text: 'Explore the forest', nextStep: 1, mood: 'adventurous' },
        { text: 'Stay where you are', nextStep: 2, mood: 'cautious' },
      ],
    },
    {
      text: 'As you explore, you find a river. You can either follow the river or cross it. What do you do?',
      choices: [
        { text: 'Follow the river', nextStep: 3, mood: 'curious' },
        { text: 'Cross the river', nextStep: 4, mood: 'brave' },
      ],
    },
    {
      text: 'You decide to stay where you are. Suddenly, you hear rustling in the bushes. What do you do?',
      choices: [
        { text: 'Investigate the sound', nextStep: 3, mood: 'curious' },
        { text: 'Run away', nextStep: 5, mood: 'fearful' },
      ],
    },
    {
      text: 'Following the river, you find a small bridge leading to a village. Do you cross the bridge?',
      choices: [
        { text: 'Cross the bridge', nextStep: 6, mood: 'trusting' },
        { text: 'Turn back', nextStep: 7, mood: 'uncertain' },
      ],
    },
    {
      text: 'You try to cross the river, but it’s too wide. You return to the starting point.',
      choices: [
        { text: 'Explore the forest', nextStep: 1, mood: 'adventurous' },
        { text: 'Stay put', nextStep: 2, mood: 'cautious' },
      ],
    },
    {
      text: 'Running away, you find yourself lost deeper in the forest. You must find a way out.',
      choices: [
        { text: 'Follow a path', nextStep: 3, mood: 'resilient' },
        { text: 'Keep exploring', nextStep: 1, mood: 'adventurous' },
      ],
    },
    {
      text: 'Crossing the bridge, you meet friendly villagers who offer help.',
      choices: [
        { text: 'Accept their help', nextStep: 8, mood: 'trusting' },
        { text: 'Refuse and explore', nextStep: 7, mood: 'independent' },
      ],
    },
    {
      text: 'Turning back, you decide to rest under a tree.',
      choices: [
        { text: 'Rest', nextStep: 1, mood: 'tired' },
        { text: 'Keep moving', nextStep: 2, mood: 'restless' },
      ],
    },
    {
      text: 'You accepted the villagers’ help, and they guide you out of the forest. The end.',
      choices: [],
    },
    {
      text: 'After crossing the bridge, you encounter a mysterious figure. Do you approach them?',
      choices: [
        { text: 'Approach cautiously', nextStep: 9, mood: 'cautious' },
        { text: 'Confront boldly', nextStep: 10, mood: 'brave' },
      ],
    },
    {
      text: 'The mysterious figure is a wise old sage who offers guidance. Do you accept?',
      choices: [
        { text: 'Accept the advice', nextStep: 11, mood: 'wise' },
        { text: 'Decline and continue', nextStep: 12, mood: 'independent' },
      ],
    },
    {
      text: 'Following the sage’s advice, you find a hidden path that leads you out of the forest.',
      choices: [],
    },
    {
      text: 'You decline the sage’s advice and find your own way out, but it takes longer.',
      choices: [],
    },
    {
      text: 'If you approached boldly, the figure turns out to be a guard, leading to a confrontation.',
      choices: [
        { text: 'Try to talk your way out', nextStep: 11, mood: 'persuasive' },
        { text: 'Fight', nextStep: 13, mood: 'aggressive' },
      ],
    },
    {
      text: 'After talking your way out, the guard allows you to leave safely.',
      choices: [],
    },
    {
      text: 'If you choose to fight, you get injured but manage to escape the forest.',
      choices: [],
    },
  ];

  const handleChoice = (nextStep, mood) => {
    setStep(nextStep); // Move to the next step in the story
    if (onChoice) {
      onChoice(mood); // Notify about the mood choice
    }
  };

  return (
    <div className="story">
      <p>{story[step].text}</p>
      <div className="choices">
        {story[step].choices.map((choice, index) => (
          <button
            key={index}
            className="choice-button"
            onClick={() => handleChoice(choice.nextStep, choice.mood)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main game component to analyze mood through storytelling
const MoodStory = () => {
  const [moodChoices, setMoodChoices] = useState([]);

  const handleChoice = (mood) => {
    setMoodChoices((prevChoices) => [...prevChoices, mood]); // Record the mood choices
  };

  const analyzeMood = (choices) => {
    if (choices.length === 0) {
      return 'No mood data available'; // Return a default message if no choices are made
    }

    // Count the occurrences of each mood type
    const moodCounts = choices.reduce((acc, mood) => {
      acc[mood] = (acc[mood] || 0) + 1;
      return acc;
    }, {});

    // Find the most frequent mood
    const mostFrequentMood = Object.keys(moodCounts).reduce((a, b) =>
      moodCounts[a] > moodCounts[b] ? a : b
    );

    return `Most Frequent Mood: ${mostFrequentMood}`;
  };

  return (
    <div className="mood-story">
    <h1 className="story-title">Adventure Story</h1>

      <Story onChoice={handleChoice} />
      <div className="results">
        <h2>Your Mood Analysis Result</h2>
        <hr/>
        <p>All Mood Choices: {moodChoices.join(', ')}</p> {/* Display all selected mood choices */}
        <hr/>
        <h3 style={{color:'#670578'}} >{analyzeMood(moodChoices)}</h3>  {/* Display the analyzed mood result */}
      </div>
      
    </div>
  );
};

export default MoodStory;




