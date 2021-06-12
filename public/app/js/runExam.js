

let display = document.querySelector('#time');
 // startTimer((reminingtime * 60), display);
let duration =(reminingtime * 60)
 // function startTimer(duration, display) {

    let timer = duration, minutes, seconds;
  
    const forInterval=setInterval(fetchToDatabase,1000)

    function fetchToDatabase (){

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
        display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
          
          timer = duration;
          
      }
      
  
      if(minutes == 0 && seconds == 0) {
        console.log("hi")
        clearInterval(forInterval);
        const allAnswers={Answers:[],proces:"done"}
    
    for(let i=1;i<=QuestionsNumber;i++){
        const options={
            questionId:"",
            answerKey:""
        }
        //get question Id
        const allArticles=document.getElementsByTagName("article")[i-1];
        options.questionId=allArticles.id;
        
        
        const divStructures=allArticles.getElementsByTagName("div")[1];

      //get multiple
      if(divStructures.id==`mutiple-options-structure${options.questionId}`){
       
       var radios =document.getElementsByName(`option${options.questionId}`);
      radios.forEach(element => {
          if(element.checked){
           options.answerKey=element.value;
          }
      });
       }

       //get filling
       if(divStructures.id==`filling-options-structure${options.questionId}`){
           var fillingKey =document.getElementById(`fillingKey${options.questionId}`);
           options.answerKey=fillingKey.value;
         
           }
     

       //get wrting answer
       if(divStructures.id==`writing-options-structure${options.questionId}`){
         
           var writtingKey =document.getElementById(`writtingKey${options.questionId}`);
           options.answerKey=writtingKey.value;
           }

            allAnswers.Answers.push(options)
    }
    const fetchOptions={
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(allAnswers)
      }
       fetch(`/students/run-exam/${examId}`,fetchOptions);
       document.querySelector("#timeDone").style.display="flex";
       document.querySelector('#time').innerHTML="00:00";


        }
    }
  //}









let fetchedNumber=0

const sevaAfterTwoMinutes=setInterval(function(){
    const allAnswers={Answers:[],proces:"inProccess"}
    
    for(let i=1;i<=QuestionsNumber;i++){
        const options={
            questionId:"",
            answerKey:""
        }
        //get question Id
        const allArticles=document.getElementsByTagName("article")[i-1];
        options.questionId=allArticles.id;
        
        
        const divStructures=allArticles.getElementsByTagName("div")[1];

       //get multiple
       if(divStructures.id==`mutiple-options-structure${options.questionId}`){
        
       var radios =document.getElementsByName(`option${options.questionId}`);
      radios.forEach(element => {
          if(element.checked){
           options.answerKey=element.value;
          }
      });
       }

       //get filling
       if(divStructures.id==`filling-options-structure${options.questionId}`){
           var fillingKey =document.getElementById(`fillingKey${options.questionId}`);
           options.answerKey=fillingKey.value;
          
           }
       

       //get wrting answer
       if(divStructures.id==`writing-options-structure${options.questionId}`){
         
           var writtingKey =document.getElementById(`writtingKey${options.questionId}`);
           options.answerKey=writtingKey.value;
           }


            allAnswers.Answers.push(options)
    }
    const fetchOptions={
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(allAnswers)
      }
      console.log(allAnswers)
       fetch(`/students/run-exam/${examId}`,fetchOptions);
       if(fetchedNumber==3){
         console.log("hi")
        clearInterval(sevaAfterTwoMinutes)
       }
       fetchedNumber++;
       


},reminingtime/5*60*1000)





document.querySelector("#finishExam").addEventListener("click",(e)=>{
    const allAnswers={Answers:[],proces:"done"}
    
    for(let i=1;i<=QuestionsNumber;i++){
        const options={
            questionId:"",
            answerKey:"",
            
        }
        //get question Id
        const allArticles=document.getElementsByTagName("article")[i-1];
        options.questionId=allArticles.id;
        
        
        const divStructures=allArticles.getElementsByTagName("div")[1];

        //get multiple
       if(divStructures.id==`mutiple-options-structure${options.questionId}`){
        
        var radios =document.getElementsByName(`option${options.questionId}`);
       radios.forEach(element => {
           if(element.checked){
            options.answerKey=element.value;
           }
       });
        }

        //get filling
        if(divStructures.id==`filling-options-structure${options.questionId}`){
            var fillingKey =document.getElementById(`fillingKey${options.questionId}`);
            options.answerKey=fillingKey.value;
           
            }
        

        //get wrting answer
        if(divStructures.id==`writing-options-structure${options.questionId}`){
          
            var writtingKey =document.getElementById(`writtingKey${options.questionId}`);
            options.answerKey=writtingKey.value;
            }

            allAnswers.Answers.push(options)
    }
    const fetchOptions={
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(allAnswers)
      }
      console.log(allAnswers)
       fetch(`/students/run-exam/${examId}`,fetchOptions);
       document.querySelector('#successfull').style.display="flex";
       clearInterval(forInterval);
       clearInterval(sevaAfterTwoMinutes)

})
  

console.log(reminingtime)