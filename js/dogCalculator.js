const myFunction = () => {
    let a = document.getElementById("humanTime").value
    let res = document.getElementById("result")

    if (a > 0) {
        res.innerHTML = ((a -2) * 4) + 21
    } else {
        res.innerHTML = "Enter a valid number."
    }
        
}