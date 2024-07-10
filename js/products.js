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

function miwodebaCalculate() {
    // Get the selected values
    const select1Value = parseFloat(document.getElementById('select1').value);
    const select2Value = parseFloat(document.getElementById('select2').value);
    const select3Value = parseFloat(document.getElementById('select3').value);
    

    let multipliedSelect1 = 0;
    let multipliedSelect2 = 0;
    let multipliedSelect3 = 0;
    

    // Check if the first select has a value other than 0
    if (select1Value !== 0) {
        multipliedSelect1 = select1Value * 35;
    }

    // Check if the second select has a value other than 0
    if (select2Value !== 0) {
        multipliedSelect2 = select2Value * 85;
    }

    if (select3Value !== 0) {
        multipliedSelect3 = select3Value * 100;
    }
   
    // Sum of the multiplied values
    const summiwodeba = multipliedSelect1 + multipliedSelect2 + multipliedSelect3 ;
    
return summiwodeba
    
}
// შემოკლებული
function cementi(){ // cementis ფასებს ვწერ ჰტმლ მხარეს, ვლიუში
    const select1Value = parseFloat(document.getElementById('selectcementi').value);
    var inputvalue =document.getElementById("inputcementi").value;
    results3= select1Value * inputvalue

    
      
   
    return results3
}

function gifso() {
     const select1Value = parseFloat(document.getElementById('select_gifso').value);
     var inputvalue =document.getElementById("input_gifso").value;

     
     resultgifso= select1Value * inputvalue
    
     return resultgifso
}  

function gaji(){
    const select1Value = parseFloat(document.getElementById('select_gaji').value);
     var inputvalue =document.getElementById("input_gaji").value;
    resultgaji= select1Value * inputvalue
    console.log(resultgaji)
    return resultgaji
}  
function qvisha(){
    const select1Value = parseFloat(document.getElementById('select_qvisha').value);
    var inputvalue =document.getElementById("input_qvisha").value;
    resultqvisha= select1Value * inputvalue
   
    return resultqvisha
  
} 
function bloki(){
    const select1Value = parseFloat(document.getElementById('select_bloki').value);
    var inputvalue =document.getElementById("input_bloki").value;
    resultbloki= select1Value * inputvalue
    console.log(resultbloki)
    return resultbloki
  
} 

function allsumm(){ // აქ ვითვლი ჯამურ ფასებს
    var miwodebaCalculate2=miwodebaCalculate() // ფუნქციას ვარეთარნებინებ ფასს და ვინხვ ცვლდში და შემდეგ ვკრიბავ
    var cementisumm=cementi() // ფუნქციის დან ვარეთნრებ 
    var gifsosumm=gifso()
    var gajisumm=gaji()
    var qvishasumm=qvisha()
    var blokisumm=bloki()
    
    const results = `

    ${gajisumm ? `გაჯის ფასი :  ${gajisumm}`  :''}
    ${cementisumm ? `ცემენტის ფასი  : ${cementisumm}`  :''}
    ${qvishasumm ? `ქვიშის ფასი  : ${qvishasumm}`  :''}
    ${blokisumm ? `ბლოკის ფასი  : ${blokisumm}`  :''}
    ${gifsosumm ? `გიფსო ფასი   : ${gifsosumm}`  :''}
    ${miwodebaCalculate2 ? `მიწოდების ჯამი : ${miwodebaCalculate2}`  :''}


 
    
    
    სულ გადასახდელი: ${miwodebaCalculate2 + cementisumm + gifsosumm+ gajisumm+qvishasumm +blokisumm} 
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
            
        message:userInput + " პროდუქტების გერდზე გამოთვალა " + datafrompage// results= გამოთვლილ პროცედურას რას ითვლიდა
    }
    // აქ ემილის პარმეტრბი წერია , email.js მა რაც მომანიჭა იდ 
    emailjs.send("service-matchara_18", "template_0843m4r",params).then(function(res){
        
    console.log("gaigzavna mesiji", userInput , datafrompage)
    alert("ნომერი და გამოთვლის კალკულაცია  გაგზავნილია, დაელოდეთ დაკავშირებას")
    })
        
    
}