import { questions } from "../Etest/Etest";

export const calculateScores = (responses) => {
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
  
    for (const [question, response] of Object.entries(responses)) {
      const [trait, polarity] = questions[question]; // questions should be predefined in the same scope
      const adjustment = (response - 4) * polarity; // Normalize the score
      traits[trait] += adjustment;
    }
  
    return traits;
  };
  
  // Function to derive the MBTI type from calculated scores
  export const deriveMbti = (traitScores) => {
    let mbti = '';
  
    mbti += traitScores.E > traitScores.I ? 'E' : 'I';
    mbti += traitScores.N > traitScores.S ? 'N' : 'S';
    mbti += traitScores.Th > traitScores.F ? 'T' : 'F';
    mbti += traitScores.J > traitScores.P ? 'J' : 'P';
  
    return mbti;
  };
  
  // Dictionary to explain MBTI characteristics
  export const mbtiCharacterExplanation = {
    E: "Extraversion",
    I: "Introversion",
    N: "Intuition",
    S: "Sensing",
    T: "Thinking",
    F: "Feeling",
    J: "Judging",
    P: "Perceiving",
  };
  
  // Definitions for each MBTI personality type
  export const personalityDescriptions = {
    "ISTJ": {
        name: "Inspector",
        traits: "Responsible, organized, detail-oriented",
        description: "ISTJs value tradition and are known for their reliability and consistency."
      },
      "ISFJ": {
        name: "Protector",
        traits: "Caring, supportive, and dependable",
        description: "ISFJs are empathetic and nurturing, often putting others' needs before their own."
      },
      "INFJ": {
        name: "Counselor",
        traits: "Idealistic, empathetic, and insightful",
        description: "INFJs are driven by their values and enjoy helping others."
      },
      "INTJ": {
        name: "Strategist",
        traits: "Analytical, strategic, and independent",
        description: "INTJs excel at planning and solving complex problems."
      },
      "ISTP": {
        name: "Craftsman",
        traits: "Practical, logical, and curious",
        description: "ISTPs are hands-on problem solvers who enjoy working with tools."
      },
      "ISFP": {
        name: "Artist",
        traits: "Artistic, sensitive, and flexible",
        description: "ISFPs are creative and enjoy exploring artistic pursuits."
      },
      "INFP": {
        name: "Idealist",
        traits: "Compassionate, creative, and introspective",
        description: "INFPs value authenticity and harmony in their relationships."
      },
      "INTP": {
        name: "Thinker",
        traits: "Analytical, innovative, and logical",
        description: "INTPs are interested in exploring concepts and theories."
      },
      "ESTP": {
        name: "Entrepreneur",
        traits: "Energetic, adventurous, and adaptable",
        description: "ESTPs are action-oriented and enjoy taking risks."
      },
      "ESFP": {
        name: "Performer",
        traits: "Outgoing, enthusiastic, and social",
        description: "ESFPs are fun-loving and enjoy being around people."
      },
      "ENFP": {
        name: "Enthusiast",
        traits: "Creative, enthusiastic, and inspiring",
        description: "ENFPs are driven by new ideas and enjoy exploring possibilities."
      },
      "ENTP": {
        name: "Visionary",
        traits: "Innovative, clever, and witty",
        description: "ENTPs enjoy exploring new concepts and challenging the status quo."
      },
      "ESTJ": {
        name: "Supervisor",
        traits: "Organized, practical, and efficient",
        description: "ESTJs value structure and enjoy maintaining order."
      },
      "ESFJ": {
        name: "Provider",
        traits: "Caring, sociable, and supportive",
        description: "ESFJs are empathetic and focus on helping others."
      },
      "ENFJ": {
        name: "Protagonist",
        traits: "Charismatic, empathetic, and social",
        description: "ENFJs are natural leaders who inspire others."
      },
      "ENTJ": {
        name: "Executive",
        traits: "Assertive, strategic, and decisive",
        description: "ENTJs are effective leaders who enjoy taking charge."
      },
    };