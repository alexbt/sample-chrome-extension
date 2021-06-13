document.body.style.backgroundColor="lightblue"
document.title="My Sample Extension"

document.querySelectorAll('a').forEach(
function(element, index, array) {
        console.log(element)
        if (element.text == "Google Store" || element.host=="store.google.com" || element.hostname == "store.google.com"){
            element.style.backgroundColor="black"
            element.style.color="white"
            //element.text = "Some other text"
            //element.href="Some other URL"
        }

        if (element.text == "About" || element.host=="about.google" || element.hostname == "about.google"){
            element.style.backgroundColor="black"
            element.style.color="white"
            //element.text = "Some other text"
            //element.href="Some other URL"
        }
    }
)
