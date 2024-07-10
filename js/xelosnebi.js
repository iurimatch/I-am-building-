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

// function stiashka(){
//     const select1Value = parseFloat(document.getElementById('select_bloki').value);
//     var inputvalue =document.getElementById("input_bloki").value;
//     resultbloki= select1Value * inputvalue
//     console.log(resultbloki)
//     return resultbloki
  
// }
function stiashka(){
   
    var inputvalue =document.getElementById("input_stiashka").value;
    result=   inputvalue * 6
    
    return result
}

function kafeli(){
   
    var inputvalue =document.getElementById("input_kafeli").value;
    result=   inputvalue * 35
    
    return result
}

function laminati(){
   
    var inputvalue =document.getElementById("input_laminati").value;
    result=   inputvalue * 8

    return result
}
function santeknika(){
   
    var inputvalue =document.getElementById("input_santeknika").value;
    result=   inputvalue * 50
    
    return result
}

// function centraluri(){
   
//     var inputvalue =document.getElementById("input_santeknika").value;
//     result=   inputvalue * 50
//     console.log(result)
//     return result
// }
function centraluri(){
    const select1Value = parseFloat(document.getElementById('select_centraluri').value);
    var inputvalue =document.getElementById("input_centrluri").value;
    result=   inputvalue * select1Value
    console.log(result,'centr')
    
    return result
}

function electrooba(){
   
    var inputvalue =document.getElementById("input_elektrooba").value;
    result=   inputvalue * 25
    
    return result
}

function maliarka(){
   
    var inputvalue =document.getElementById("input_maliarka").value;
    result=   inputvalue * 15
    
    return result
}

function cheri(){
    const select1Value = parseFloat(document.getElementById('select_cheri').value);
    var inputvalue =document.getElementById("input_cheri").value;
    result=   inputvalue * select1Value
    
    return result
}






function allsumm(){
    var stiashkasumm=stiashka()
    var kafelisumm=kafeli()
    var laminatisumm=laminati()
    var santeknikasumm=santeknika()
    var centralurisumm=centraluri()

    var electroobasumm=electrooba()
    var maliarkasumm=maliarka()
    var cherisumm=cheri()
    
    const results = `

    ${stiashkasumm ? `სტიაშკის ფასი ჯამი :  ${stiashkasumm}`  :''}
    ${kafelisumm ? `კაფელის ფასი ჯამი:  ${kafelisumm}`  :''}
     ${laminatisumm ? `ლამინატის ფასი ჯამი:  ${laminatisumm}`  :''}
     ${santeknikasumm ? `სანტექნიკის ფასი ჯამი:  ${santeknikasumm}`  :''}
    ${centralurisumm ? `ცენტრალურის ფასი ჯამი:  ${centralurisumm}`  :''}
    ${electroobasumm ? `ელექტროობის ფასი ჯამი:  ${electroobasumm}`  :''}
     ${maliarkasumm ? `მალიარკა ფასი ჯამი : ${maliarkasumm}`  :''}
     ${cherisumm ? `ჭერის ფასი ჯამი : ${cherisumm}`  :''}


    
    სულ გადასახდელი: ${stiashkasumm+kafelisumm+ laminatisumm+santeknikasumm+centralurisumm +electroobasumm + maliarkasumm+ cherisumm}
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
            
        message:userInput + " ხელოსნების გვერდზე გამოთვალა : " + datafrompage// results= გამოთვლილ პროცედურას რას ითვლიდა
    }
    // აქ ემილის პარმეტრბი წერია , email.js მა რაც მომანიჭა იდ 
    emailjs.send("service-matchara_18", "template_0843m4r",params).then(function(res){
        
    console.log("gaigzavna mesiji", userInput , datafrompage)
    alert("ნომერი და გამოთვლის კალკულაცია  გაგზავნილია, დაელოდეთ დაკავშირებას")
    })
        
    
}