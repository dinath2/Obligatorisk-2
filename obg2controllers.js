// controller

        function yourChosenBar(barNo){
        if (chosenBar == barNo) {chosenBar = null;}
        else {chosenBar = barNo;}
        show();
        }

        function removeBar(chosenBar){
        if (chosenBar) {numbers.splice(chosenBar -1, 1);}
        show();
        }

        function addBar(inputValue) {
        if (inputValue > 0 && inputValue <= 10) {numbers.push(inputValue);}
        else {alert("Hey, you gotta pick a number between 1 and 10 to add a bar!");}
        show();
        }

        function changingBar(inputValue, chosenBar){
        let changedNumber = chosenBar -1;
        if ((inputValue > 0 && inputValue <= 10)) {numbers[changedNumber] = inputValue;}
        else {alert("Hey, you gotta pick a number between 1 and 10 to change the value!");}
        show();
        }