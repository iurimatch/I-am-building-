function toggleContent(header) {
    const content = header.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        header.innerHTML = "-<p>" + header.querySelector('p').innerText + "</p>";
    } else {
        content.style.display = "none";
        header.innerHTML = "+<p>" + header.querySelector('p').innerText + "</p>";
    }
}


function gatana(){
    const select1Value = parseFloat(document.getElementById('select_gatana').value);
    
    
    return select1Value 
} 

function msuhebi(){
    const select1Value = parseFloat(document.getElementById('select_mushebi').value);
    var inputvalue =document.getElementById("input_mushebi").value;
    result= select1Value * inputvalue
    console.log(result)
    return result
}


function allsumm(){ // აქ ვითვლი ჯამურ ფასებს
    var gatanasumm=gatana() // ფუნქციას ვარეთარნებინებ ფასს და ვინხვ ცვლდში და შემდეგ ვკრიბავ
   var msuhebisumm=msuhebi()
    

    

    const results = `
    ${gatanasumm ? `ნარჩენის წაღების ფასი : ${gatanasumm}`  :''}
    ${msuhebisumm ? `მუშების დახმარების ფასი : ${msuhebisumm}`  :''}
   
    
    
    
    სულ გადასახდელი: ${gatanasumm + msuhebisumm} 
`;
document.getElementById('results').innerText = results;
return results // ამის დარეთრნებულს რესლტს გამოვიძახებ ქვემოთ ღიალკზე მიბმულ ფუნქციში

}



//  აქ შევქმნი ღილკზე მონცმების შეიყვნოს და გამოგზავნოს მომხრებლმა ის მარტო ტელფონს შეიყვნს მე ავიღებ ყველფერსdocument.getElementById('summButton').addEventListener('click', function() {
    // Prompt the customer to enter their phone number

document.getElementById('contactme').addEventListener('click', function ( ) {
        let isValid = false;
        let userInput; // აქ ინახვს შეყვანილ ტელფონის ნომერს
        var datafrompage = allsumm() // ფუნქციას დავბრუნებია რესულტი აქ დავიჭირე და ამს გადვცემ მერე  პარმეტრად კიდე 

        console.log(datafrompage,"clic funqciam სწრად მიიღო")
        
       
        while (!isValid) {
            userInput = prompt("შეიყვანე ტელეფონის ნომერი:");
    
            // Check if the input is exactly 9 digits and contains only numbers
            if (/^\d{9}$/.test(userInput)) {
                isValid = true;
            } else {
                alert("არასწორი ნომერია. ნომერი უნდა იყოს 9 ციფრიანი");
            }
        }
        if(isValid=true){
            SendMail(userInput, datafrompage ) // ამ ფუნქციში შეყვნილი უსერნამე და წინა კალკუცის ფუნქცის შედეგი გადვეცი აქ სმს  ფუნქციას
            
        }
        
});


function SendMail(userInput, datafrompage){ // პარმეტრებს ვაწოდებ summ ფუნქციიდან


    var params={
            
        message:userInput + " გატანის გვერდზე ფასი გამოთვალა " + datafrompage// results= გამოთვლილ პროცედურას რას ითვლიდა
    }
    // აქ ემილის პარმეტრბი წერია , email.js მა რაც მომანიჭა იდ 
    emailjs.send("service-matchara_18", "template_0843m4r",params).then(function(res){
        
    console.log("gaigzavna mesiji", userInput , datafrompage)
    alert("ნომერი და გამოთვლის კალკულაცია  გაგზავნილია, დაელოდეთ დაკავშირებას")
    })
        
    
}