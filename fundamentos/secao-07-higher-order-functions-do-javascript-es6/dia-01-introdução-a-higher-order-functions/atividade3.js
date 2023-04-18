const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostas = (rightAnswer, studentAnswers) => {
	if (rightAnswer === studentAnswers) {
		return 1
	}
	if (studentAnswers === "N.A") {
		return 0
	}
	if (rightAnswer !== studentAnswers) {
		return -0.5
	}
}

