var ingredients = $('#ingredients');
var ingredientsDiv = $('#ingredients-div');
var instructions = $('#instructions');
var instructionsDiv = $('#instructions-div');


let format = (parser,content, div) => {
    var data = content.text()
    var dataSplit = data.split(parser)
    
    var html = `<ul>`
    // dynamically create elements
    dataSplit.forEach((str) => {
        html += `<li>${str}</li>`
    })
    
    html += '</ul>'
    div.html(html)
    
}

let fillData = () => {
    // let node = document.createTextNode ('Hello, I am Arun');
    // console.log('hit')
    format(',',ingredients,ingredientsDiv)
    format(';',instructions,instructionsDiv)
}

fillData()