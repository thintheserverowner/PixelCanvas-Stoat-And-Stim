// ==UserScript==
// @name         Inscryption r/place
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  stoat
// @author       oralekin (stoatified by Jeck0_0)
// @icon         https://cdn.discordapp.com/attachments/413985144219893760/959922796966854706/Stoat.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            if (!Date.now) {
                Date.now = function() { return new Date().getTime(); }
            }
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/413985144219893760/959921119903744030/stotalmisplay.png";
            i.style = "position: absolute;left: 0;top: 0px;image-rendering: pixelated;width: 2000px;height: 1000px;";
            i.id = "mcss-overlay"
            i.setAttribute("vis",1)
            console.log(i);
            return i;
        })())

            document.getElementsByTagName("body")[0].appendChild(
        (function () {
            const i = document.createElement("button");
            i.style = "position: fixed;left: 10px; background: #fff; top: 50%;width: 50px;height: 50px;";
            i.innerHTML = "T"
            i.onclick = function() {
                const img = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.querySelector("#mcss-overlay")
                if (img.getAttribute("vis") == "1") {
                    img.setAttribute("vis",0)
                    img.style.opacity  = 0
                } else {

                    img.setAttribute("vis",1)
                    img.style.opacity  = 1
                }
            }
            console.log(i);
            return i;
        })())

    }, false);

}

