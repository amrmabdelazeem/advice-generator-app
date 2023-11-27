const apiUrl = "https://api.adviceslip.com/advice";

async function getApi(apiUrl){
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    var dataId = data.slip.id;
    var advice = data.slip.advice;

    document.getElementById("id").textContent = String(dataId);
    document.getElementById("advice").textContent = "“"+String(advice)+"”";

}

getApi(apiUrl);

