"use strict";

var style = document.createElement("style");

style.innerText = `
    body * {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif !important;
    }
`;
style["id"] = "otl-font-fix-css";

document.head.append(style)