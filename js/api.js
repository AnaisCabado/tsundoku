import { apiKey } from "./apikey.js"; //para saber de qué archivo cogemos la api key
const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="; //la url básica de la api

//para el fetch con GET
async function fetchData(url, parameters={}) {
    try {
        const finalURL = new URL (BASE_URL + url); //para que cocatene la base url con el resto de url
        Object.keys(parameters).forEach(param => {
            finalURL.searchParams.append(param, parameters[param]);
        })
        finalURL.searchParams.append("maxResults=", "12"); //para limitar el número de resultados que nos da
        finalURL.searchParams.append("key=", apiKey);
        const response = await fetch(finalURL.toString());//fetch lo importante jeje
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}


async function getBookBySubject(subject) {
    const url = `subject:"${subject}"`;
    const result = await fetchData(url);
    console.log(result);
    return result;
}

async function getBookByTitle(title) {
    const url = `intitle:"${title}"`;
    const result = await fetchData(url);
    console.log(result);
    return result;
}

async function getBookByAuthor(author) {
    const url = `inauthor:"${author}"`;
    const result = await fetchData(url);
    console.log(result);
    return result;
}

export {
    getBookByTitle,
    getBookBySubject,
    getBookByAuthor
}