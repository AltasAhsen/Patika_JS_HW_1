document.querySelector("#myName").innerHTML = prompt("İsminiz: ");
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
const saatRefresh = () => {
    let date = new Date();
    document.querySelector("#myClock").innerHTML = `${date.getHours() <10 ? "0" + date.getHours(): date.getHours()} : ${date.getMinutes() <10 ? "0" + date.getMinutes(): date.getMinutes()} : ${date.getSeconds() <10 ? "0" + date.getSeconds(): date.getSeconds()} ${days[date.getDay()]}` ;
    setTimeout(saatRefresh,1000);
}
saatRefresh();