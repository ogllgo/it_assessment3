if (!document.querySelector("#this-page")) {
    const TOC = document.createElement("div");
    TOC.id = "this-page";
    document.body.appendChild(TOC);
}
const tableOfContents = document.querySelector("#this-page");
const h3Headings = document.querySelectorAll("h3");
const h2Headings = document.querySelectorAll("h2");
const h1Headings = document.querySelectorAll("h1");
const headings = document.querySelectorAll("h1, h2, h3", "h4");
for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    if (heading.classList.contains("contents-ignore")) continue;
    const anchor = document.createElement("a");
    const p = document.createElement("p");
    switch(heading.tagName) {
        case "H1": 
            anchor.id = `h1heading-${i}`;
            p.classList.add("h1header-link");
            break;
        
        case "H2": 
            anchor.id = `h2heading-${i}`;
            p.classList.add("h2header-link");
            break;
        
        case "H3": 
            anchor.id = `h3heading-${i}`;
            p.classList.add("h3header-link");
            break;
        
        case "H4": 
            anchor.id = `h4heading-${i}`;
            p.classList.add("h4header-link");
            break;
        
        default:
            console.log("Unknown element detected when making table of contents. Element:", heading, "tag:", heading.tagName)
            break;
    }
    p.innerText = heading.innerText;
    anchor.addEventListener('click', (_) => {
        const offset = 70;
        const targetPos = heading.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPos,
            behavior: "smooth"
        });
    })
    anchor.appendChild(p);
    tableOfContents.appendChild(anchor);
}