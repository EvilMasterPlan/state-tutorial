import JSConfetti from 'js-confetti';

class Confetti {
	constructor() {
		if (!Confetti.instance) {
			Confetti.instance = this;
		}

		this.jsConfetti = new JSConfetti();

		return Confetti.instance;
	}

	celebrate() {
		this.jsConfetti.addConfetti();
	}
}

const instance = new Confetti();

export default instance;
