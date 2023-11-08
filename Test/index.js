import staticData from "./content.js";

function showTableContent () {
    const table = document.getElementById("tableRoot");
    table.innerHTML=`<tr>${staticData.header.map((item)=>{
        return(
        `<th>${item}</th>`
        )
    }).join("")}</tr>`;

    let tableData = "";
    staticData.content.map((item)=>{
        return tableData+=`<tr><td>${item.id}</td>
        <td>${item.title}</td>
        <td><a href=${item.sourceLink}>Click Me</a></td>
        <td><a href=${item.youtubeVideo}>Click Me</a></td>
        <td>${item.codeSnippetLink!=="Add kara" ? `<a href=${item.codeSnippetLink}>Click Me</a>` : "Add kara"}</td>
        </tr>`

    })
    table.innerHTML += tableData;
}

showTableContent();

