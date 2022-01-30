function ajax(src, callback){
    // your code here
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                callback(xhr.responseText);
            }else{
                console.error(xhr.status, xhr.statusText)
            }
            
        }
    };
    xhr.open('GET', src);
    xhr.send();
}
function render(data){
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or 
    // something alike
    let response = document.createElement('p');
    let resText = document.createTextNode(data);
    response.appendChild(resText);
    document.querySelector('body').appendChild(response);
} 

    ajax(
        "https://appworks-school.github.io/Remote-Aassigiment-Data/products", function(response){
        render(response); 
        }
    ); // you should get product information in JSON format and render data in the page
