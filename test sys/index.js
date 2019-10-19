let quizContainer = document.getElementById('quizContainer')
        let result = document.getElementById('result')
        let submitBtn = document.getElementById("submitBtn")
        submitBtn.onclick = btnSubmit

        let ans = []
        let counter = 0
        let marks = 0

        let questionsList = [
            {
                question: 'What is your religion 1?',
                answer: {
                    a: 'Christian',
                    b: 'Muslim',
                    c: 'Hindu',
                    d: 'Sikh'
                },
                correctAns: 'a'
            },
            {
                question: 'What is your Mazhab?',
                answer: {
                    a: 'Christian',
                    b: 'Muslim',
                    c: 'Hindu',
                    d: 'Sikh'
                },
                correctAns: 'b'
            },
            {
                question: 'What is your religion?',
                answer: {
                    a: 'Christian',
                    b: 'Muslim',
                    c: 'Hindu',
                    d: 'Sikh'
                },
                correctAns: 'a'
            },
            {
                question: 'What is your Mazhab?',
                answer: {
                    a: 'Christian',
                    b: 'Muslim',
                    c: 'Hindu',
                    d: 'Sikh'
                },
                correctAns: 'b'
            },
            {
                question: 'What is your religion?',
                answer: {
                    a: 'Christian',
                    b: 'Muslim',
                    c: 'Hindu',
                    d: 'Sikh'
                },
                correctAns: 'a'
            },{
                question: 'What is your Mazhab?',
                answer: {
                    a: 'Christian',
                    b: 'Muslim',
                    c: 'Hindu',
                    d: 'Sikh'
                },
                correctAns: 'b'
            },
            {
                question: 'What is your religion?',
                answer: {
                    a: 'Christian',
                    b: 'Muslim',
                    c: 'Hindu',
                    d: 'Sikh'
                },
                correctAns: 'a'
            },
            

        ]


        function nextQues() {
            
            if (counter >= questionsList.length-1) {
                return 
            }
            answerz()
            counter++
            quizToShow()
        }


        function quizToShow() {

            let ques = questionsList[counter]

            quizContainer.innerHTML = `
            <div>Q#${counter+1}:${ques.question}</div>
            <br>
            <input type="radio" name="answer" value="a" class="age">
            <span>${ques.answer.a}</span>
            <br>
            <input type="radio" name="answer" value="b" class="age">
            <span>${ques.answer.b}</span>
            <br>
            <input type="radio" name="answer" value="c" class="age">
            <span>${ques.answer.c}</span>
            <br>
            <input type="radio"  name="answer" value="d" class="age">
            <span>${ques.answer.d}</span>
            <br>
            <button onclick='nextQues()'>Next</button>`


        }

        function answerz(){
            let ans = document.querySelectorAll('.age')
            ans.forEach((ans)=>{
                if(ans.checked){
                    
                    if (ans.value == questionsList[counter].correctAns) {
                        marks = marks + 5
                        
                    }                    
                }
            })


            
        }

        function resultShow() {
            console.log('chaling');
            
        }
        function btnSubmit() {
            quizToShow()
            submitBtn.style.display = 'none'
            
        }




        