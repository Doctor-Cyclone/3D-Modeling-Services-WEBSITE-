const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');
    let step = 0;

    const animation = (total) => {
        let startNum = 0;
        step = (total / 100) * 3;
        const interval = setInterval(() => {
            startNum += step;

            if(startNum >= total){
                clearInterval(interval);
                startNum += total;
            }
            totalValue.textContent = Math.round(startNum);
        }, 0);
    };

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if(calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
        }

        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if(calcDay.value && calcDay.value < 10){
            dayValue *= 1.5;
        }

        if(typeValue && squareValue){
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
            animation(total);
        }
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        if(target === calcType || target === calcSquare || target === calcDay || target === calcCount){
            countSum();
        }
    });	
};

export default calc;