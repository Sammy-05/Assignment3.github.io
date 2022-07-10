$(document).ready(()=>{
    const sendRequest = (city) => {
        const url = `http://api.weatherapi.com/v1/current.json?key=8f895b22cd9e4827a2795115221007&q=${city}&aqi=no`

        $.get(url, function(response) {
            // $("#icon-image").attr("src", response.current.condition.icon);
            $("#temperature").text("Temperature: " + response.current.temp_c + "°C")
            $("#rain").text("Rain: " + response.current.precip_mm + "mm")
            $("#cloud").text("Clouds: " + response.current.cloud + "%")
        })
    }

    $("#form1").submit(function(e) {
        e.preventDefault();
        const city = $("#city-input").val();
        sendRequest(city);
    
    }
    )

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //         'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));


    
})
