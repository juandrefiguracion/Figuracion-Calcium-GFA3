function generateNumbers() {
		let num1 = Math.round(Math.random() * 20);
		let num2 = Math.round(Math.random() * 20);
		let num3 = Math.round(Math.random() * 20);

		let maxNumber = Math.max(num1, num2, num3);
		let num1stLetter = String.fromCharCode(97 + num1);
		let num2num3Mins = num2 * num3;
		let hours = Math.floor(num2num3Mins / 60);
		let minutes = num2num3Mins % 60;

		let result = `The three numbers are ${num1}, ${num2}, and ${num3}. The biggest number among them is ${maxNumber}, meaning the one who got this number would mow the lawn. The ${num1}th letter in the English alphabet is ${num1stLetter}. ${num2*num3} minutes is equivalent to ${hours} hours and ${minutes} minutes. So the person who would mow the lawn would mow it for ${hours} hours and ${minutes} minutes.`;
		document.getElementById("result").innerHTML = result;
	}