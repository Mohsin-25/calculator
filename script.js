let screen = document.getElementById(`screen`)
        let screenValue = ``;
        buttons = document.querySelectorAll(`button`);
        for (item of buttons) {
            item.addEventListener(`click`, (e) => {
                buttonText = e.target.innerText;
                console.log(`button pressed is`, buttonText);
                if (buttonText == `x`) {
                    buttonText = `*`;
                    screenValue += buttonText;
                    screen.value = screenValue;
                }
                else if (buttonText == `=`) {
                    screen.value = eval(screenValue);
                }
                else if (buttonText == `C`) {
                    screenValue = ``;
                    screen.value = screenValue;
                }
                else if (buttonText == `<`) {
                    screenValue = screenValue.slice(0,(screenValue.length - 1));
                    // screenvalue = screenvalue.slice(0,-1) also works;
                    screen.value = screenValue;
                }
                // On OFF Button
                else if (buttonText == `OFF`) {
                    screen.style.background = `black`;
                }
                else if (buttonText == `ON`) {
                    screen.style.background = `rgb(215, 215, 215)`;
                }
                // 
                else{
                    screenValue += buttonText;
                    screen.value = screenValue;
                }

            })
        };