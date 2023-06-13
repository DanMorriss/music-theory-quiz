//BEGINNER QUESTIONS
const beginnerQuestions = [
    {
        question: 'What is the relative minor key of C major?',
        answers: [
          { text: 'A minor', correct: true },
          { text: 'C minor', correct: false},
          { text: 'G minor', correct: false},
          { text: 'E minor', correct: false}
        ]
      },
    {
        question: 'What is the relative minor key of F major?',
        answers: [
            { text: 'D minor', correct: true },
            { text: 'F minor', correct: false},
            { text: 'G minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the relative minor key of D major?',
        answers: [
            { text: 'B minor', correct: true },
            { text: 'F minor', correct: false},
            { text: 'D minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of A minor?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'G major', correct: false},
            { text: 'D major', correct: false},
            { text: 'A major', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of D minor?',
        answers: [
            { text: 'F major', correct: true },
            { text: 'D major', correct: false},
            { text: 'G major', correct: false},
            { text: 'C major', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of E minor?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'D major', correct: false},
            { text: 'E major', correct: false},
            { text: 'C major', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of B minor?',
        answers: [
            { text: 'D major', correct: true },
            { text: 'G major', correct: false},
            { text: 'B major', correct: false},
            { text: 'C major', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of C major?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many flats are in the key of F major?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of G major?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of D major?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '0', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of A minor?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many flats are in the key of D minor?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of E minor?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of B minor?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '0', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many beats are in a 4/4 time signature?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many beats are in a 3/4 time signature?',
        answers: [
            { text: '3', correct: true },
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '6', correct: false}
        ]
    },
    {
        question: 'How many crotchets can you fit in a bar of 4/4?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many crotchets can you fit in a bar of 3/4?',
        answers: [
            { text: '3', correct: true },
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '6', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 4/4?',
        answers: [
            { text: '8', correct: true },
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '16', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 3/4?',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: false},
            { text: '8', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 6/8?',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: false},
            { text: '8', correct: false},
            { text: '12', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 12/8?',
        answers: [
            { text: '12', correct: true },
            { text: '4', correct: false},
            { text: '8', correct: false},
            { text: '16', correct: false}
        ]
    },
    {
        question: 'How many quavers make up a crotchet?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many quavers make up a minim?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '8', correct: false},
            { text: '12', correct: false}
        ]
    },
    {
        question: 'How many quavers make up a semi-breve?',
        answers: [
            { text: '8', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '12', correct: false}
        ]
    },
    {
        question: 'How many crotchets make up a minim?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many crotchets make up a semi-breve?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many minims make up a semi-breve?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'What is the term for the distance between two pitches?',
        answers: [
            { text: 'Interval', correct: true },
            { text: 'Chord', correct: false},
            { text: 'Cadence', correct: false},
            { text: 'Relative', correct: false}
        ]
    },
    {
        question: 'A whole tone up from C is?',
        answers: [
            { text: 'D', correct: true },
            { text: 'C#', correct: false},
            { text: 'Db', correct: false},
            { text: 'E', correct: false}
        ]
    },
    {
        question: 'A whole tone up from D is?',
        answers: [
            { text: 'E', correct: true },
            { text: 'D#', correct: false},
            { text: 'Eb', correct: false},
            { text: 'Fb', correct: false}
        ]
    },
    {
        question: 'A whole tone up from E is?',
        answers: [
            { text: 'F#', correct: true },
            { text: 'F', correct: false},
            { text: 'Gb', correct: false},
            { text: 'G', correct: false}
        ]
    },
    {
        question: 'A whole tone up from F is?',
        answers: [
            { text: 'G', correct: true },
            { text: 'F#', correct: false},
            { text: 'Gb', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A whole tone up from G is?',
        answers: [
            { text: 'A', correct: true },
            { text: 'G', correct: false},
            { text: 'A#', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A whole tone up from A is?',
        answers: [
            { text: 'B', correct: true },
            { text: 'C', correct: false},
            { text: 'A#', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A whole tone up from B is?',
        answers: [
            { text: 'C#', correct: true },
            { text: 'C', correct: false},
            { text: 'Db', correct: false},
            { text: 'G', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from C is?',
        answers: [
            { text: 'C#', correct: true },
            { text: 'D', correct: false},
            { text: 'Eb', correct: false},
            { text: 'B', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from D is?',
        answers: [
            { text: 'Eb', correct: true },
            { text: 'F', correct: false},
            { text: 'C#', correct: false},
            { text: 'E', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from E is?',
        answers: [
            { text: 'F', correct: true },
            { text: 'F#', correct: false},
            { text: 'Eb', correct: false},
            { text: 'G', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from F is?',
        answers: [
            { text: 'F#', correct: true },
            { text: 'G', correct: false},
            { text: 'Ab', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from G is?',
        answers: [
            { text: 'Ab', correct: true },
            { text: 'G', correct: false},
            { text: 'A#', correct: false},
            { text: 'Bb', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from A is?',
        answers: [
            { text: 'Bb', correct: true },
            { text: 'C', correct: false},
            { text: 'G', correct: false},
            { text: 'D', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from B is?',
        answers: [
            { text: 'C', correct: true },
            { text: 'Cb', correct: false},
            { text: 'Db', correct: false},
            { text: 'C#', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of C major?',
        answers: [
            { text: 'F major', correct: true },
            { text: 'F minor', correct: false},
            { text: 'G major', correct: false},
            { text: 'D minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of C major?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'F major', correct: false},
            { text: 'D major', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of F major?',
        answers: [
            { text: 'Bb major', correct: true },
            { text: 'C major', correct: false},
            { text: 'D minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of F major?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'Bb major', correct: false},
            { text: 'D minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of G major?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'D major', correct: false},
            { text: 'D minor', correct: false},
            { text: 'E minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of G major?',
        answers: [
            { text: 'D major', correct: true },
            { text: 'C major', correct: false},
            { text: 'A minor', correct: false},
            { text: 'E minor', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of D major?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'A major', correct: false},
            { text: 'A minor', correct: false},
            { text: 'D minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of D major?',
        answers: [
            { text: 'A major', correct: true },
            { text: 'G major', correct: false},
            { text: 'A minor', correct: false},
            { text: 'E minor', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a major chord?',
        answers: [
            { text: 'Root, 3, 5', correct: true },
            { text: 'Root, b3, 5', correct: false},
            { text: 'Root, 5, octave', correct: false},
            { text: 'Root, 4, 5', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a minor chord?',
        answers: [
            { text: 'Root, b3, 5', correct: true },
            { text: 'Root, 3, 5', correct: false},
            { text: 'Root, 5, octave', correct: false},
            { text: 'Root, 4, 5', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a sus2 chord?',
        answers: [
            { text: 'Root, 2, 5', correct: true },
            { text: 'Root, 2, 4', correct: false},
            { text: 'Root, 2, octave', correct: false},
            { text: 'Root, 2, 3', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a sus4 chord?',
        answers: [
            { text: 'Root, 4, 5', correct: true },
            { text: 'Root, 2, 4', correct: false},
            { text: 'Root, 4, octave', correct: false},
            { text: 'Root, 3, 4', correct: false}
        ]
    },

]

//INTERMEDIATE QUESTIONS
const intermediateQuestions = [
    {
        question: 'What is the relative minor key of A major?',
        answers: [
          { text: 'F# minor', correct: true },
          { text: 'A minor', correct: false},
          { text: 'B minor', correct: false},
          { text: 'C# minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of E major?',
        answers: [
          { text: 'C# minor', correct: true },
          { text: 'E minor', correct: false},
          { text: 'G# minor', correct: false},
          { text: 'G minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Bb major?',
        answers: [
          { text: 'G minor', correct: true },
          { text: 'F minor', correct: false},
          { text: 'Eb minor', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Eb major?',
        answers: [
          { text: 'C minor', correct: true },
          { text: 'G minor', correct: false},
          { text: 'F minor', correct: false},
          { text: 'A minor', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of F# minor?',
        answers: [
          { text: 'A major', correct: true },
          { text: 'B major', correct: false},
          { text: 'C# major', correct: false},
          { text: 'F# major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of C# minor?',
        answers: [
          { text: 'E major', correct: true },
          { text: 'C major', correct: false},
          { text: 'A major', correct: false},
          { text: 'F# major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of G minor?',
        answers: [
          { text: 'Bb major', correct: true },
          { text: 'F major', correct: false},
          { text: 'Eb major', correct: false},
          { text: 'C major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of C minor?',
        answers: [
          { text: 'Eb major', correct: true },
          { text: 'C major', correct: false},
          { text: 'Bb mjaor', correct: false},
          { text: 'F major', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of A major?',
        answers: [
          { text: '3', correct: true },
          { text: '2', correct: false},
          { text: '4', correct: false},
          { text: '1', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of E major?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '2', correct: false},
          { text: '1', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of Bb major?',
        answers: [
          { text: '2', correct: true },
          { text: '1', correct: false},
          { text: '3', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of Eb major?',
        answers: [
          { text: '3', correct: true },
          { text: '2', correct: false},
          { text: '1', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of F# minor?',
        answers: [
          { text: '3', correct: true },
          { text: '1', correct: false},
          { text: '2', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of C# minor?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '2', correct: false},
          { text: '1', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of G minor?',
        answers: [
          { text: '2', correct: true },
          { text: '1', correct: false},
          { text: '3', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of C minor?',
        answers: [
          { text: '3', correct: true },
          { text: '2', correct: false},
          { text: '1', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a quaver?',
        answers: [
          { text: '2', correct: true },
          { text: '4', correct: false},
          { text: '8', correct: false},
          { text: '16', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a crotchet?',
        answers: [
          { text: '4', correct: true },
          { text: '2', correct: false},
          { text: '8', correct: false},
          { text: '16', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a minim?',
        answers: [
          { text: '8', correct: true },
          { text: '2', correct: false},
          { text: '4', correct: false},
          { text: '16', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a semi-breve?',
        answers: [
          { text: '16', correct: true },
          { text: '8', correct: false},
          { text: '4', correct: false},
          { text: '2', correct: false}
        ]
      },
      {
        question: 'How many modes of the major scale are there?',
        answers: [
          { text: '7', correct: true },
          { text: '5', correct: false},
          { text: '2', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'What is the 1st mode of the major scale called?',
        answers: [
          { text: 'Ionian', correct: true },
          { text: 'Dorian', correct: false},
          { text: 'Mixolydian', correct: false},
          { text: 'Aolian', correct: false}
        ]
      },
      {
        question: 'What is the 2nd mode of the major scale called?',
        answers: [
          { text: 'Dorian', correct: true },
          { text: 'Ionian', correct: false},
          { text: 'Mixolydian', correct: false},
          { text: 'Aolian', correct: false}
        ]
      },
      {
        question: 'What is the 5th mode of the major scale called?',
        answers: [
          { text: 'Mixolydian', correct: true },
          { text: 'Ionian', correct: false},
          { text: 'Dorian', correct: false},
          { text: 'Aolian', correct: false}
        ]
      },
      {
        question: 'What is the 6th mode of the major scale called?',
        answers: [
          { text: 'Aolian', correct: true },
          { text: 'Ionian', correct: false},
          { text: 'Dorian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from C?',
        answers: [
          { text: 'Eb', correct: true },
          { text: 'A', correct: false},
          { text: 'Bb', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from F?',
        answers: [
          { text: 'Ab', correct: true },
          { text: 'A', correct: false},
          { text: 'Bb', correct: false},
          { text: 'B', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from G?',
        answers: [
          { text: 'Bb', correct: true },
          { text: 'A', correct: false},
          { text: 'F', correct: false},
          { text: 'Eb', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from D?',
        answers: [
          { text: 'F', correct: true },
          { text: 'A', correct: false},
          { text: 'C', correct: false},
          { text: 'F#', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from A?',
        answers: [
          { text: 'C', correct: true },
          { text: 'Db', correct: false},
          { text: 'E', correct: false},
          { text: 'G', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from E?',
        answers: [
          { text: 'G', correct: true },
          { text: 'B', correct: false},
          { text: 'G#', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from Bb?',
        answers: [
          { text: 'Db', correct: true },
          { text: 'D', correct: false},
          { text: 'Eb', correct: false},
          { text: 'G', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from Eb?',
        answers: [
          { text: 'Gb', correct: true },
          { text: 'Bb', correct: false},
          { text: 'F#', correct: false},
          { text: 'Eb', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from C?',
        answers: [
          { text: 'E', correct: true },
          { text: 'Eb', correct: false},
          { text: 'G', correct: false},
          { text: 'D', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from F?',
        answers: [
          { text: 'A', correct: true },
          { text: 'Bb', correct: false},
          { text: 'D', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from G?',
        answers: [
          { text: 'B', correct: true },
          { text: 'Bb', correct: false},
          { text: 'D', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from D?',
        answers: [
          { text: 'F#', correct: true },
          { text: 'Gb', correct: false},
          { text: 'D', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from A?',
        answers: [
          { text: 'C#', correct: true },
          { text: 'Db', correct: false},
          { text: 'F#', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from E?',
        answers: [
          { text: 'G#', correct: true },
          { text: 'F#', correct: false},
          { text: 'C#', correct: false},
          { text: 'A', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from Bb?',
        answers: [
          { text: 'D', correct: true },
          { text: 'F', correct: false},
          { text: 'Ab', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from Eb?',
        answers: [
          { text: 'G', correct: true },
          { text: 'Bb', correct: false},
          { text: 'F', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of A major?',
        answers: [
          { text: 'D major', correct: true },
          { text: 'D minor', correct: false},
          { text: 'E major', correct: false},
          { text: 'C# minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of A major?',
        answers: [
          { text: 'E major', correct: true },
          { text: 'D major', correct: false},
          { text: 'F# minor', correct: false},
          { text: 'F major', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of E major?',
        answers: [
          { text: 'A major', correct: true },
          { text: 'E minor', correct: false},
          { text: 'E major', correct: false},
          { text: 'A minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of E major?',
        answers: [
          { text: 'B major', correct: true },
          { text: 'A major', correct: false},
          { text: 'C# minor', correct: false},
          { text: 'G# minor', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Bb major?',
        answers: [
          { text: 'Eb major', correct: true },
          { text: 'F major', correct: false},
          { text: 'C minor', correct: false},
          { text: 'G minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Bb major?',
        answers: [
          { text: 'F major', correct: true },
          { text: 'F minor', correct: false},
          { text: 'C minor', correct: false},
          { text: 'Eb major', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Eb major?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'F major', correct: false},
          { text: 'Bb major', correct: false},
          { text: 'A major', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Eb major?',
        answers: [
          { text: 'Bb major', correct: true },
          { text: 'Ab major', correct: false},
          { text: 'F major', correct: false},
          { text: 'A major', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a major 7 chord?',
        answers: [
          { text: 'Root, 3, 5, 7', correct: true },
          { text: 'Root, 3, 5, b7', correct: false},
          { text: 'Root, b3, 5, b7', correct: false},
          { text: 'Root, b3, 5, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a minor 7 chord?',
        answers: [
          { text: 'Root, b3, 5, b7', correct: true },
          { text: 'Root, 3, 5, 7', correct: false},
          { text: 'Root, 3, 5, b7', correct: false},
          { text: 'Root, b3, 5, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 7 chord?',
        answers: [
          { text: 'Root, b3, 5, b7', correct: false },
          { text: 'Root, 3, 5, 7', correct: false},
          { text: 'Root, 3, 5, b7', correct: true},
          { text: 'Root, b3, 5, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a major 6 chord?',
        answers: [
          { text: 'Root, 3, 5, 6', correct: true },
          { text: 'Root, b3, 5, 6', correct: false},
          { text: 'Root, b3, 5, b6', correct: false},
          { text: 'Root, 4, 6, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a minor 6 chord?',
        answers: [
          { text: 'Root, 3, 5, 6', correct: false },
          { text: 'Root, b3, 5, 6', correct: true},
          { text: 'Root, b3, 5, b6', correct: false},
          { text: 'Root, 4, 6, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a diminished 7th chord?',
        answers: [
          { text: 'Root, b3, b5, bb7', correct: true },
          { text: 'Root, b3, b5, b7', correct: false},
          { text: 'Root, b3, 5, bb7', correct: false},
          { text: 'Root, 3, b5, b7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of an augmented chord?',
        answers: [
          { text: 'Root, 3, #5', correct: true },
          { text: 'Root #3, #5', correct: false},
          { text: 'Root, #3, 5', correct: false},
          { text: 'Root, 3, b5', correct: false}
        ]
      }
    ]

//ADVANCED QUESTIONS
const advancedQuestions = [
    {
        question: 'What is the relative minor key of B major?',
        answers: [
          { text: 'G# minor', correct: true },
          { text: 'Ab minor', correct: false},
          { text: 'D minor', correct: false},
          { text: 'Eb minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of F# major?',
        answers: [
          { text: 'D# minor', correct: true },
          { text: 'Eb major', correct: false},
          { text: 'A minor', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Ab major?',
        answers: [
          { text: 'F minor', correct: true },
          { text: 'B minor', correct: false},
          { text: 'Bb minor', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Db major?',
        answers: [
          { text: 'Bb minor', correct: true },
          { text: 'E minor', correct: false},
          { text: 'Ab minor', correct: false},
          { text: 'F minor', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of G# minor?',
        answers: [
          { text: 'B major', correct: true },
          { text: 'F major', correct: false},
          { text: 'C# major', correct: false},
          { text: 'Eb major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of D# minor?',
        answers: [
          { text: 'F# major', correct: true },
          { text: 'A# major', correct: false},
          { text: 'Gb major', correct: false},
          { text: 'Bb major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of F minor?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'Bb major', correct: false},
          { text: 'D minor', correct: false},
          { text: 'C# minor', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of Bb minor?',
        answers: [
          { text: 'Db major', correct: true },
          { text: 'C# minor', correct: false},
          { text: 'G minor', correct: false},
          { text: 'D minor', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of B major?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of F# major?',
        answers: [
          { text: '6', correct: true },
          { text: '5', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many flat are there in the key of Ab major?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '5', correct: false},
          { text: '6', correct: false}
        ]
      },
      {
        question: 'How many flat are there in the key of Db major?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of G# minor?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of D# minor?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '5', correct: false},
          { text: '6', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of F minor?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '5', correct: false},
          { text: '6', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of Bb minor?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of B major?',
        answers: [
          { text: 'E major', correct: true },
          { text: 'F# major', correct: false},
          { text: 'F# minor', correct: false},
          { text: 'E minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of F# major?',
        answers: [
          { text: 'C# major', correct: true },
          { text: 'Db major', correct: false},
          { text: 'B major', correct: false},
          { text: 'B minor', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Ab major?',
        answers: [
          { text: 'Db major', correct: true },
          { text: 'C# major', correct: false},
          { text: 'Eb major', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Db major?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'Gb major', correct: false},
          { text: 'G# major', correct: false},
          { text: 'F# major', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Bb major?',
        answers: [
          { text: 'Eb major', correct: true },
          { text: 'E major', correct: false},
          { text: 'F major', correct: false},
          { text: 'F minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Bb major?',
        answers: [
          { text: 'F major', correct: true },
          { text: 'F minor', correct: false},
          { text: 'Eb major', correct: false},
          { text: 'Eb minor', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Eb major?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'Ab minor', correct: false},
          { text: 'Bb major', correct: false},
          { text: 'Bb minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Eb major?',
        answers: [
          { text: 'Bb major', correct: true },
          { text: 'Bb minor', correct: false},
          { text: 'Ab major', correct: false},
          { text: 'Ab minor', correct: false}
        ]
      },
      {
        question: 'What is the 3rd mode of the major scale called?',
        answers: [
          { text: 'Phrygian', correct: true },
          { text: 'Lydian', correct: false},
          { text: 'Locrian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is the 4th mode of the major scale called?',
        answers: [
          { text: 'Lydian', correct: true },
          { text: 'Phrygian', correct: false},
          { text: 'Locrian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is the 7th mode of the major scale called?',
        answers: [
          { text: 'Locrian', correct: true },
          { text: 'Phrygian', correct: false},
          { text: 'Lydian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is another name for the interval of a 9?',
        answers: [
          { text: 'Compound 2nd', correct: true },
          { text: 'Compound 3rd', correct: false},
          { text: 'Compound 4th', correct: false},
          { text: 'Compound 6th', correct: false}
        ]
      },
      {
        question: 'What is another name for the interval of a 11?',
        answers: [
          { text: 'Compound 4th', correct: true },
          { text: 'Compound 2nd', correct: false},
          { text: 'Compound 6th', correct: false},
          { text: 'Compound 3rd', correct: false}
        ]
      },
      {
        question: 'What is another name for the interval of a 13?',
        answers: [
          { text: 'Compound 6th', correct: true },
          { text: 'Compound 4th', correct: false},
          { text: 'Compound 3rd', correct: false},
          { text: 'Compound 2nd', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a major 9 chord?',
        answers: [
          { text: 'Root, 3, 5, 7, 9', correct: true },
          { text: 'Root, 3, 5, 9', correct: false},
          { text: 'Root, 3, 7, 9', correct: false},
          { text: 'Root, 3, b7, 9', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a minor 9 chord?',
        answers: [
          { text: 'Root, b3, 5, b7, 9', correct: true },
          { text: 'Root, b3, 5, b9', correct: false},
          { text: 'Root, b3, b7, 9', correct: false},
          { text: 'Root, b3, 5, 9', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 9 chord?',
        answers: [
          { text: 'Root, 3, 5, b7, 9', correct: true },
          { text: 'Root, 3, 5 ,7, 9', correct: false},
          { text: 'Root, b3, 5, b7, 9', correct: false},
          { text: 'Root, b3, 5, 7, 9', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 11 chord?',
        answers: [
          { text: 'Root, 3 ,5 b7, 9, 11', correct: true },
          { text: 'Root, b3 ,5 7, 9, 11', correct: false},
          { text: 'Root, 3 ,5, 9, 11', correct: false},
          { text: 'Root, b3, b7, 11', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 13 chord?',
        answers: [
          { text: 'Root, 3 ,5 b7, 9, 11, 13', correct: true },
          { text: 'Root, b3, b7, 13', correct: false},
          { text: 'Root, 3, 11, 13', correct: false},
          { text: 'Root, 3 ,b7, 9, 13', correct: false}
        ]
      }
    ]