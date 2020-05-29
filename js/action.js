function show(){
    let rand1 = Math.floor(Math.random() * ki.length);
    let rand2 = Math.floor(Math.random() * mivel.length);
    let rand3 = Math.floor(Math.random() * mit.length);
    let rand4 = Math.floor(Math.random() * hol.length);
    document.getElementById("prophecy").innerHTML = ki[rand1] + " " + mivel[rand2] + " " + mit[rand3] + " " + hol[rand4];
}
