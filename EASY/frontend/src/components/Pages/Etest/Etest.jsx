import React, { useState } from 'react';
import './etest.css';
import GradientButtons from './GradientButtons';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
// Define the questions object
export const questions = {
  "You regularly make new friends.": ["E", 1],
  "Complex and novel ideas excite you more than simple and straightforward ones.": ["N", 1],
  "You usually feel more persuaded by what resonates emotionally with you than by factual arguments.": ["Th", -1],
  "Your living and working spaces are clean and organized.": ["J", 1],
  "You usually stay calm, even under a lot of pressure.": ["A", 1],
  "You find the idea of networking or promoting yourself to strangers very daunting.": ["E", -1],
  "You prioritize and plan tasks effectively, often completing them well before the deadline.": ["J", 1],
  "People’s stories and emotions speak louder to you than numbers or data.": ["Th", -1],
  "You like to use organizing tools like schedules and lists.": ["J", 1],
  "Even a small mistake can cause you to doubt your overall abilities and knowledge.": ["Tu", 1],
  "You feel comfortable just walking up to someone you find interesting and striking up a conversation.": ["E", 1],
  "You are not too interested in discussions about various interpretations of creative works.": ["N", -1],
  "You prioritize facts over people's feelings when determining a course of action.": ["Th", 1],
  "You often allow the day to unfold without any schedule at all.": ["J", -1],
  "You rarely worry about whether you make a good impression on people you meet.": ["Th", 1],
  "You enjoy participating in team-based activities.": ["E", 1],
  "You enjoy experimenting with new and untested approaches.": ["N", 1],
  "You prioritize being sensitive over being completely honest.": ["Th", -1],
  "You actively seek out new experiences and knowledge areas to explore.": ["N", 1],
  "You are prone to worrying that things will take a turn for the worse.": ["Tu", 1],
  "You enjoy solitary hobbies or activities more than group ones.": ["E", -1],
  "You cannot imagine yourself writing fictional stories for a living.": ["N", -1],
  "You favor efficiency in decisions, even if it means disregarding some emotional aspects.": ["Th", 1],
  "You prefer to do your chores before allowing yourself to relax.": ["J", 1],
  "In disagreements, you prioritize proving your point over preserving the feelings of others.": ["Th", 1],
  "You usually wait for others to introduce themselves first at social gatherings.": ["E", -1],
  "Your mood can change very quickly.": ["Tu", 1],
  "You are not easily swayed by emotional arguments.": ["Th", 1],
  "You often end up doing things at the last possible moment.": ["J", -1],
  "You enjoy debating ethical dilemmas.": ["N", 1],
  "You usually prefer to be around others rather than on your own.": ["E", 1],
  "You become bored or lose interest when the discussion gets highly theoretical.": ["N", -1],
  "When facts and feelings conflict, you usually find yourself following your heart.": ["F", 1],
  "You find it challenging to maintain a consistent work or study schedule.": ["J", -1],
  "You rarely second-guess the choices that you have made.": ["A", -1],
  "Your friends would describe you as lively and outgoing.": ["E", 1],
  "You are drawn to various forms of creative expression, such as writing.": ["N", 1],
  "You usually base your choices on objective facts rather than emotional impressions.": ["F", -1],
  "You like to have a to-do list for each day.": ["J", 1],
  "You rarely feel insecure.": ["Tu", 1],
  "You avoid making phone calls.": ["E", -1],
  "You enjoy exploring unfamiliar ideas and viewpoints.": ["N", 1],
  "You can easily connect with people you have just met.": ["E", 1],
  "If your plans are interrupted, your top priority is to get back on track as soon as possible.": ["J", 1],
  "You are still bothered by mistakes that you made a long time ago.": ["Tu", 1],
  "You are not too interested in discussing theories on what the world could look like in the future.": ["N", -1],
  "Your emotions control you more than you control them.": ["Tu", 1],
  "When making decisions, you focus more on how the affected people might feel than on what is most logical or efficient.": ["Th", -1],
  "Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.": ["J", -1],
  "When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you.": ["Tu", 1],
  "You would love a job that requires you to work alone most of the time.": ["E", -1],
  "You believe that pondering abstract philosophical questions is a waste of time.": ["N", -1],
  "You feel more drawn to busy, bustling atmospheres than to quiet, intimate places.": ["E", 1],
  "If a decision feels right to you, you often act on it without needing further proof.": ["Th", -1],
  "You often feel overwhelmed.": ["Tu", 1],
  "You complete things methodically without skipping over any steps.": ["J", 1],
  "You prefer tasks that require you to come up with creative solutions rather than follow concrete steps.": ["N", 1],
  "You are more likely to rely on emotional intuition than logical reasoning when making a choice.": ["Th", -1],
  "You struggle with deadlines.": ["J", -1],
  "You feel confident that things will work out for you.": ["A", -1],
};

// Dictionary to explain each MBTI character
const mbtiCharacterExplanation = {
  "E": "Extraversion",
  "I": "Introversion",
  "N": "Intuition",
  "S": "Sensing",
  "T": "Thinking",
  "F": "Feeling",
  "J": "Judging",
  "P": "Perceiving",
};

// Define the personality descriptions
const personalityDescriptions = {
 
    "ISTJ": {
      name: "Logistician",
      traits: "Honest and Direct, Disciplined, Very Responsible, Calm and Practical, Organized and Effective, Research-Oriented",
      description: "ISTJs value tradition and are known for their reliability and consistency."
    },
    "ISFJ": {
      name: "Defender",
      traits: "Supportive, Reliable, Observant, Enthusiastic, Hardworking, Good Practical Skills",
      description: "ISFJs are empathetic and nurturing, often putting others' needs before their own."
    },
    "INFJ": {
      name: "Advocate",
      traits: "Insightful, Principled, Passionate, Altruistic, Creative",
      description: "INFJs are driven by their values and enjoy helping others."
    },
    "INTJ": {
      name: "Architect",
      traits: "Rational, Informed , Independent, Determined, Curious, Original",
      description: "INTJs excel at planning and solving complex problems."
    },
    "ISTP": {
      name: "Virtuoso",
      traits: "Diligent and Observant, Handy and Resourceful, Spontaneous, Direct and Authentic, Independent,Grounded ",
      description: "ISTPs are hands-on problem solvers who enjoy working with tools."
    },
    "ISFP": {
      name: "Adventurer",
      traits: "Charming, Sensitive to Others, Kind and Encouraging, Imaginative, Passionate",
      description: "ISFPs are creative and enjoy exploring artistic pursuits."
    },
    "INFP": {
      name: "Mediator",
      traits: "Empathetic, Generous, Open-Minded, Creative, Passionate, Idealistic",
      description: "INFPs value authenticity and harmony in their relationships."
    },
    "INTP": {
      name: "Logician",
      traits: "Analytical, Original, Open-Minded, Curious, Honest",
      description: "INTPs are interested in exploring concepts and theories."
    },
    "ESTP": {
      name: "Entrepreneur",
      traits: "Bold, Rational and Practical, Original, Perceptive, Direct, Sociable",
      description: "ESTPs are action-oriented and enjoy taking risks."
    },
    "ESFP": {
      name: "Entertainer",
      traits: "Bold, Original, Positive and Enthusiastic, Hands-on and Observant, Excellent People Skills",
      description: "ESFPs are fun-loving and enjoy being around people."
    },
    "ENFP": {
      name: "Campaigner",
      traits: "Curious, Perceptive, Enthusiastic, Excellent Communicators, Easygoing, Good-Natured and Positive",
      description: "ENFPs are driven by new ideas and enjoy exploring possibilities."
    },
    "ENTP": {
      name: "Debater",
      traits: "Knowledgeable, Quick Thinkers, Original, Excellent Brainstormers, Charismatic, Energetic",
      description: "ENTPs enjoy exploring new concepts and challenging the status quo."
    },
    "ESTJ": {
      name: "Executive",
      traits: "Dedicated, Strong-willed, Direct and Honest, Loyal, Patient, and Reliable, Enjoy Creating Order, Excellent Organizers",
      description: "ESTJs value structure and enjoy maintaining order."
    },
    "ESFJ": {
      name: "Consul",
      traits: "Strong Practical Skills, Strong Sense of Duty, Very Loyal, Sensitive and Warm, Good at Connecting with Others",
      description: "ESFJs are empathetic and focus on helping others."
    },
    "ENFJ": {
      name: "Protagonist",
      traits: "Receptive, Reliable, Passionate, Altruistic, Charismatic",
      description: "ENFJs are natural leaders who inspire others."
    },
    "ENTJ": {
      name: "Commander",
      traits: "Efficient, Energetic, Self-Confident, Strong-Willed, Strategic Thinkers, Charismatic and Inspiring",
      description: "ENTJs are effective leaders who enjoy taking charge."
    },
  };
// Function to calculate scores based on responses
const calculateScores = (responses) => {
  const traits = {
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    Th: 0,
    F: 0,
    J: 0,
    P: 0,
    A: 0,
    Tu: 0,
  };

  Object.entries(responses).forEach(([question, response]) => {
    const [trait, polarity] = questions[question];
    const adjustment = (response - 4) * polarity; // Normalize response to a polarity-adjusted scale
    traits[trait] += adjustment;
  });

  return traits;
};

// Function to derive MBTI from scores
const deriveMbti = (traitScores) => {
  let mbti = '';

  mbti += traitScores.E > traitScores.I ? 'E' : 'I';
  mbti += traitScores.N > traitScores.S ? 'N' : 'S';
  mbti += traitScores.Th > traitScores.F ? 'T' : 'F';
  mbti += traitScores.J > traitScores.P ? 'J' : 'P';
  mbti += traitScores.A > traitScores.Tu ? '-A' : '-T';

  return mbti;
};

// Main component for the test
const Etest = () => {
  const [responses, setResponses] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (question, value) => {
    setResponses((prev) => ({
      ...prev,
      [question]: value,
    }));
    if (error) {
      setError(''); // Clear error when a new answer is provided
    }
  };

  const handleSubmit = () => {
    const allQuestionsAnswered = Object.keys(questions).every(
      (question) => responses[question] !== undefined
    );

    if (allQuestionsAnswered) {
      setIsCompleted(true);
    } else {
      setError('Please answer all questions before submitting.');
      toast.error('Please answer all questions before submitting.');
    }
  };

  const scores = isCompleted ? calculateScores(responses) : {};
  const personalityType = isCompleted ? deriveMbti(scores) : '';
  const personality = isCompleted ? personalityDescriptions[personalityType.slice(0, 4)] : {};
  const mbtiExplanation = isCompleted
    ? `${mbtiCharacterExplanation[personalityType[0]]}, 
      ${mbtiCharacterExplanation[personalityType[1]]}, 
      ${mbtiCharacterExplanation[personalityType[2]]}, 
      ${mbtiCharacterExplanation[personalityType[3]]}`
    : '';

  return (
    <div className="containerss">
      <h1>MBTI Personality Test</h1>
      {!isCompleted ? (
        <div>
          {Object.keys(questions).map((question, index) => (
            <div key={index} className="question">
              <p>{question}</p>
              <GradientButtons
                selectedValue={responses[question]}
                onClick={(value) => handleChange(question, value)}
              />
            </div>
          ))}
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="result">
          <h2>Your MBTI Personality Type:</h2>
          <p>{personalityType}</p>
          <h3>{personality.name}</h3> {/* Display personality name */}
          <p><strong>Traits:</strong> {personality.traits}</p> {/* Display key traits */}
          <p>{personality.description}</p> {/* Display brief description */}
          <p><strong>Character Explanation:</strong> {mbtiExplanation}</p> {/* Explanation of MBTI characters */}
          <div className="test">
            <Link to="/MoodStory">Next</Link> {/* Navigation to the next section */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Etest;