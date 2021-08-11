"use strict";

// r-42olwf class removes border
// r-12d83nn class colors the follow button

var style = document.createElement("style");

style.innerText = `
    body * {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif !important;
    }
`;
style["id"] = "otl-font-fix-css";

const mutObs = new MutationObserver(mutations => {
    for(const mutation of mutations) {
        if (mutation.type === 'childList') {
            console.log("Found " + Array.from(mutation.addedNodes).filter(node => {
                if (node.nodeType !== Node.ELEMENT_NODE) return false;
                if (!node.attributes.role || node.attributes.role.value !== "button") return false;
                return node.dataset.testid && node.dataset.testid.includes("unfollow");
            }).map(node => {
                node.classList.remove("r-1niwhzg");
                node.classList.remove("r-1ccsd61");
                node.classList.add("r-42olwf");
                node.classList.add("r-12d83nn");
                return node;
            }).length + " Nodes");
        }
    }
});

mutObs.observe(document.body, {
    subtree: true,
    childList: true
})

document.head.append(style)