const buttons = document.getElementsByTagName('li');

let input1 = '';
let input2 = '';
let selectedAction = '';
let leftNumber = 0;
let rightNumber = 0;

const calculateScreen = document.getElementsByClassName('calculatorScreen')[0];

function numberClicked(number) {
    if (selectedAction == '') {
        input1 += number;
        calculateScreen.innerHTML = input1;
    }

    if (selectedAction.length > 0) {
        input2 += number;
        calculateScreen.innerHTML = input2;
    }
}

function actionClicked(action) {
    if (action == '5') {
        rightNumber = parseInt(input2);
        let result = 0;
        switch (selectedAction) {
            case '1': // Multiply
                result = leftNumber * rightNumber;
                break;
            case '2':// Multiply
                result = leftNumber / rightNumber;
                break;
            case '3':
                result = leftNumber + rightNumber;
                break;
            case '4':
                result = leftNumber - rightNumber;
                break;
        }

        calculateScreen.innerHTML = result;
    }
    else if (action < 5 && leftNumber == 0) {
        leftNumber = parseInt(input1);
        selectedAction = action;
    }
}