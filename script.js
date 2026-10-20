const quizzes = [pneumaticMultipleChoiceQuiz.concat(pneumaticTrueFalseQuiz)];
const PASS_PERCENTAGE = 85;
let currentQuizIndex = 0;
let quizData = quizzes[currentQuizIndex];

let index = 0;
let userAnswers = new Array(quizData.length).fill(null);

const resultMessages = {
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجه حراره.",
        "منت لو تبص على التلميحات وانت بتحل مكنتش جبت درجات الحراره دى.",
        "تعي اشب شاى يسطا بالى انت عامله ده.",
        "متزعلش مش مهم درجتك فى الامتحان المهم الصحه والستر.",
        "هيجى شخص يحسسك انك ف كفه والكون كله فى كفه وبعدين يسقفلك بالكفتين على وشك علشان النتيجه الى انت جايبها دى."
    ],
    resultsSuccess: [
        "مشاء الله عليك ",
        "هايل بجد عاش عليك.",
        "شيئ جميل جدا عندك احسن منكده كمان  عاش عليك  ."
    ]
};

function init() {
    if (quizzes.length === 0) {
        document.getElementById('quiz-ui').classList.add('hidden');
        document.getElementById('results-ui').classList.remove('hidden');
        document.getElementById('final-feedback').innerText = 'لا توجد بيانات اختبار متاحة.';
        return;
    }
    setCurrentQuiz(0);
    render();
}

function setCurrentQuiz(quizIndex) {
    currentQuizIndex = quizIndex;
    quizData = quizzes[currentQuizIndex];
    index = 0;
    userAnswers = new Array(quizData.length).fill(null);
    document.getElementById('total-idx').innerText = quizData.length.toString().padStart(2, '0');
}

function render() {
    const data = quizData[index];
    document.getElementById('current-idx').innerText = (index + 1).toString().padStart(2, '0');

    document.getElementById('question-text').innerHTML = `
        <div class="q-en-main">${data.question}</div>
        <div class="q-ar-box">${data.arabicQuestion}</div>
    `;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const answered = userAnswers[index] !== null;

    document.getElementById('btn-next').disabled = !answered;
    document.getElementById('btn-next').innerText = (index === quizData.length - 1) ? "FINALIZE" : "NEXT";
    document.getElementById('btn-prev').disabled = index === 0;

    const btnSkip = document.getElementById('btn-skip');
    if (answered) {
        btnSkip.classList.add('hidden');
    } else {
        btnSkip.classList.remove('hidden');
        btnSkip.innerText = "SKIP";
    }

    container.className = "options-grid";
    Object.entries(data.options).forEach(([key, opt]) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <div class="option-main">
                <span class="char-idx">${key}</span>
                <span>${opt}</span>
            </div>
            <div class="option-translation">${data.arabicOptions[key]}</div>
        `;
        if (answered) {
            btn.disabled = true;
            if (key === data.correctAnswer) btn.classList.add('correct');
            if (userAnswers[index] === key && key !== data.correctAnswer) btn.classList.add('wrong');
        } else {
            btn.onclick = () => select(key);
        }
        container.appendChild(btn);
    });
}

function select(choice) {
    if (userAnswers[index] !== null) return;
    userAnswers[index] = choice;
    render();
}

function move(dir) {
    if (dir === 1 && index === quizData.length - 1) { finish(); }
    else { index += dir; render(); }
}

function finish() {
    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('results-ui').classList.remove('hidden');
    const score = userAnswers.filter((a, i) => a === quizData[i].correctAnswer).length;
    const pct = Math.round(score / quizData.length * 100);
    document.getElementById('final-pct').innerText = pct + '%';
    const fb = document.getElementById('final-feedback');
    const passed = pct >= PASS_PERCENTAGE;
    const category = passed ? 'resultsSuccess' : 'resultsAdvice';
    fb.innerText = resultMessages[category][Math.floor(Math.random() * resultMessages[category].length)];

    const failAudio = document.getElementById('audio-fail');
    const successAudio = document.getElementById('audio-success');
    if (passed) {
        successAudio?.play().catch(() => {});
    } else {
        failAudio?.play().catch(() => {});
    }

    const actionBtn = document.getElementById('results-action');
    if (currentQuizIndex < quizzes.length - 1) {
        actionBtn.innerText = 'CONTINUE TO NEXT QUIZ';
        actionBtn.onclick = startNextQuiz;
    } else {
        actionBtn.innerText = 'RESTART ASSESSMENT';
        actionBtn.onclick = () => location.reload();
    }
}

function startNextQuiz() {
    setCurrentQuiz(currentQuizIndex + 1);
    document.getElementById('results-ui').classList.add('hidden');
    document.getElementById('quiz-ui').classList.remove('hidden');
    render();
}

window.onload = init;
