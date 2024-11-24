function dodajuKorpu(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.backgroundColor = "green";
    alert('Dodato u korpu!');
 }

    function  forma(event) {

        event.preventDefault();
        var niz = [];

        niz.push(document.getElementById('name').value);
        niz.push(document.getElementById('email').value);
        niz.push(document.getElementById('poruka').value);
         let  poElement = niz.pop();
            console.log("Niz:", niz);
            console.log("Poruka: ", poruka.value);
        }
            
function prikaz(period){
    let nizIspod = ["Coat of Arms","Aces in Exile","Wehrmacht","White Death","Screaming Eagles"];
    let nizIznad = ["To Hell and Back","Smoking Snakes","7734","Man of War","Inmate 4859"];
    let prazan = "";
    if (period === 0){
          console.log("Ove pesme je objavio pre 2012");
          for(let i = 0; i<nizIspod.length;i++){
            prazan+=nizIspod[i]+"<br>";
            console.log(prazan.includes("Coat of Arms","Aces in Exile","Wehrmacht","White Death","Screaming Eagles"));
          }
    }else {
        console.log("Ove pesme je objavio posle 2012");
        for(let i = 0; i<nizIznad.length;i++){
            prazan+=nizIznad[i]+"<br>";
            console.log(prazan.includes("To Hell and Back","Smoking Snakes","7734","Man of War","Inmate 4859"));
        }
    }
    let pomocDiv = document.getElementById("stanje");
    pomocDiv.innerHTML = prazan.toUpperCase();

}           



