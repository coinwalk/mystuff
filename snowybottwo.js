const fanboy = Number(document.getElementById("pct_balance").value);
document.getElementById("b_min").click();
const samuel = (fanboy/800).toFixed(8);
const daniel = (samuel * 1.25)
var amanku = daniel; 
const ziggie = (samuel*10);
const smile = (samuel*6.9);
const buck = (samuel*7.9);
var mate = ((Math.floor(fanboy/ziggie))*ziggie);
var baboons = parseFloat(mate);
var madman = parseFloat(mate)-ziggie;
var OSCAR = fanboy;
var snowy = fanboy;
var billy = fanboy;
var scotty = fanboy; 
var betfired = true; 
var heartbeat = true;
var bogus =  parseFloat((amanku*1).toFixed(8));


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runFelineBot() {
OSCAR = Number(document.getElementById("pct_balance").value);
    if (((OSCAR==billy) && (betfired))|| ((OSCAR==scotty) && (betfired))) {
        betfired = false;
        snowy = parseFloat(OSCAR);
        mate = ((Math.floor(snowy/ziggie))*ziggie);
        if ((snowy > (mate+smile)) && (snowy < (mate+buck)) && (snowy!==baboons)){
            amanku = parseFloat(amanku)*2;
            baboons = parseFloat(snowy); 
            console.log("seven");
        }
        if (((snowy-(amanku*4))<=madman)&&(snowy>(madman+ziggie+ziggie))){
            amanku = daniel;
            baboons = parseFloat(mate);  
            madman = parseFloat(mate)-ziggie;      
        }  
        if ((snowy-(amanku*2))<=madman){
            amanku = daniel;
            baboons = parseFloat(mate);  
            madman = parseFloat(mate);      
        } 
        if (snowy>(fanboy+1440)){
             console.log("winner winner chicken dinner")
             heartbeat=false;
             return
        }
        if ((heartbeat)&&(!betfired)){
            bogus =  parseFloat((amanku*1).toFixed(8));
            console.log("Profit:", ((snowy - fanboy) * 1).toFixed(8));
            document.getElementById("pct_chance").value=49.5
            document.getElementById("pct_bet").value = (amanku*1).toFixed(8);
            billy = parseFloat(((snowy + bogus)*1).toFixed(8));
            scotty = parseFloat(((snowy - bogus)*1).toFixed(8));
            document.getElementById("a_lo").click();
            await sleep(350);
            betfired = true;
            runFelineBot();
        } 
       
    } 
await sleep(1);
runFelineBot();
}


runFelineBot();
