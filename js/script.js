const urlDunia = "https://disease.sh/v3/covid-19/all/"
const urlIndo = "https://covid19.mathdro.id/api/countries/indonesia"
let dunia = document.querySelector(".world-case")
let cases = document.querySelector(".case-id")
let death = document.querySelector(".dead-id")
let recovered = document.querySelector(".recover-id")
let treated = document.querySelector(".treated-id")

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

window.onload=()=> {
    fetch(urlDunia)
        .then((response)=>{
            getResultDunia(response.json())
        })
    fetch(urlIndo)
        .then((response)=>{
            getResultIndo(response.json())
        })
}

getResultDunia = (result) => {
    console.log("result", result)
    Promise.resolve(result).then((val=>{
        console.log("val",val)
        dunia.innerHTML = formatNumber(val.cases)
    })) 
}
getResultIndo = (result) => {
    console.log("result", result)
    Promise.resolve(result).then((val=>{
        console.log("val",val)
        cases.innerHTML = formatNumber(val.confirmed.value)        
        death.innerHTML = formatNumber(val.deaths.value)
        recovered.innerHTML = formatNumber(val.recovered.value)
    })) 
}
