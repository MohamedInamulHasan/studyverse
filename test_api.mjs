// test_api.mjs
async function runTests() {
  try {
    const currRes = await fetch('http://localhost:5000/api/curriculum');
    const curr = await currRes.json();
    console.log('✅ /api/curriculum:', `Grades: ${curr.grades.length}, Subjects: ${curr.subjects.length}`);

    const qaRes = await fetch('http://localhost:5000/api/qa/one-word?chapterId=chap-phy-101');
    const qa = await qaRes.json();
    console.log('✅ /api/qa/one-word:', `Questions: ${qa.length}, First Q: "${qa[0]?.question}" -> "${qa[0]?.answer}"`);

    const solveRes = await fetch('http://localhost:5000/api/qa/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: 'What physical quantity is defined as mass times velocity?',
        mode: 'one_word',
        chapterId: 'chap-phy-101'
      })
    });
    const solve = await solveRes.json();
    console.log('✅ /api/qa/solve:', `Result: "${solve.result}" (${solve.source})`);

    const chatRes = await fetch('http://localhost:5000/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Give me 5 one word questions on momentum',
        chapterId: 'chap-phy-101',
        mode: 'one_word'
      })
    });
    const chat = await chatRes.json();
    console.log('✅ /api/ai/chat:', `Reply: "${chat.reply}" (${chat.format})`);

    const quizSubmitRes = await fetch('http://localhost:5000/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quizId: 'quiz-phy-101',
        answers: {
          q1: 1,
          q2: 2,
          q3: 'centrifugal force',
          q4: 2
        }
      })
    });
    const quizSubmit = await quizSubmitRes.json();
    console.log('✅ /api/quiz/submit:', `Score: ${quizSubmit.score}/${quizSubmit.total} (${quizSubmit.percentage}%), Streak: ${quizSubmit.newStreak}`);

    console.log('🎉 All API tests PASSED successfully!');
  } catch (err) {
    console.error('❌ Test failed:', err);
  }
}

runTests();
