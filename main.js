function getLastLetter() {
            const word = document.getElementById('wordInput').value.trim();
            const resultElement = document.getElementById('result');
            
            if (!word) {
                resultElement.textContent = "Введите слово";
                return;
            }
            
            let lastLetter = word[word.length - 1];
            
            if (lastLetter.toLowerCase() === 'ь') {
                if (word.length > 1) {
                    lastLetter = word[word.length - 2];
                    resultElement.textContent = "Результат: " + lastLetter;
                } else {
                    resultElement.textContent = "Слово состоит только из 'ь'";
                }
            } else {
                resultElement.textContent = "Результат: " + lastLetter;
            }
        }
        function checkEven() {
            const number = document.getElementById('numberInput').value;
            const resultElement = document.getElementById('result');
            
            if (number === "") {
                resultElement.textContent = "Введите число";
                return;
            }
            
            if (number % 2 === 0) {
                resultElement.textContent = "Число " + number + " - четное";
            } else {
                resultElement.textContent = "Число " + number + " - нечетное";
            }
        }