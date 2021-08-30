function darkmode(checkbox) {
    if (checkbox) {
        document.getElementById('bodyBack').style.background = "black"
        document.getElementsByTagName('body')[0].style.color = "white"
        document.getElementsByTagName('h1')[0].style.background = "grey";
    }
    else {
        document.getElementById('bodyBack').style.background = "#4F44C7"
        document.getElementsByTagName('body')[0].style.color = "#D1706E"
        document.getElementsByTagName('h1')[0].style.background = "#4B91B8";
    }
}