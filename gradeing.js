function marks(markObtained ,fullmarks) {
    let percentage = (markObtained / fullmarks) * 100;
    let grade = 0;
    if (percentage >90) {
        grade = "A"
    }
    else if(percentage > 80){
        grade = "B"
    }
    else if(percentage > 70){
        grade = "C"
    }
    else if (percentage > 60){
        grade = "D"
    }
    else if(percentage > 50){
        grade = "E"
    }
    else if (percentage < 50){
        grade = "F"
    }
    else {
        console.log("Error")
    }
    let text = `You obtained ${markObtained} marks out of ${fullmarks}
    Your Percentage : ${percentage} 
    Your Grade : ${grade}`;
    return text
}
console.log(marks("a",1));
