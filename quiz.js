let userData = {};

function startQuiz() {
    const form = document.getElementById('userForm');
    const name = form.name.value;
    const email = form.email.value;
    const rollno=form.rollno.value;
    const password=form.password.value;
    const batch=form.batch.value;
    if (name && email && rollno && password &&batch) {
     
        userData.name =name;
        userData.email = email;
        userData.rollno = rollno;
        userData.password = password;
        userData.batch = batch;
        window.location.href = 'quiz.html';
    } else {
        alert('Please fill out the form');
    }
}

function submitQuiz() {
    const form = document.getElementById('quizForm');
    const answers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
        q6: form.q6.value,
        q7: form.q7.value,
        q8: form.q8.value,
        q9: form.q9.value,
        q10: form.q10.value
    };

    const correctAnswers = {
        q1: 'paris',
        q2: 'Jupiter',
        q3: 'France',
        q4: 'Mount Everest',
        q5: 'Pacific Ocean',
        q6: 'Au',
        q7: 'Leonardo da Vinci',
        q8: 'Mars',
        q9: 'Whale Shark',
        q10: 'Lion'

    };

    let score = 0;
    for (let key in answers) {
        if (answers[key] === correctAnswers[key]) {
            score++;
        }
    }

    userData.score = score;
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = 'results.html';
}




