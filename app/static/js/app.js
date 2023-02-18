
*{
    box-sizing: border-box;
}
body {
    padding-top: 5rem;
}
div.formgroup, form{
    display: flex;
    flex-flow: column wrap;
}

div.formgroup:not(:first-child) > *{
    margin-bottom: 1em;
}
form{
    width: 80%;
} 
form h2{
    padding-bottom: .5em;
    border-bottom: solid #B2B2B2 .08em;
}
div.formgroup input{
    width: 40%;
}
div.formgroup label:first-child{
    font-weight: bold;
}

li{
    list-style-type: none;
}
.success{
    background-color: #4bb543;
    padding: 1em;
    margin: 1em;
    color:#fff;
}
Janai Shelton 5:18 PM
window.addEventListener('load', (event)=>{

    setInterval( ()=>{
        let flashcontainer= document.querySelector("span#flashitem");
        if (document.contains(flashcontainer)){
            flashcontainer.innerHTML="";
            flashcontainer.classList.remove("success");
        }
    }, 3000)
});