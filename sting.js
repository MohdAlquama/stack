let s = "Check the console for string method results."

// document.getElementById("text").innerText = `Mr ${s} Hello World!`;

let doc = document.getElementById("text");

doc.innerText = `Mr ${s} Hello World!`;
doc.innerText += `\nLength of string s: ${s.length}`;
doc.innerText += `\nUppercase: ${s.toUpperCase()}`;
doc.innerText += `\nLowercase: ${s.toLowerCase()}`;
doc.innerText += `\nIndex of 'console': ${s.indexOf("console")}`;
doc.innerText += `\nSlice (6, 11): ${s.slice(6, 11)}`;
doc.innerText += `\nReplace 'string' with 'text': ${s.replace("string", "text")}`;
doc.innerText += `\nCharacter at index 5: ${s.charAt(7)}`;
doc.innerText += `\nSplit by spaces: ${s.split(" ")}`;