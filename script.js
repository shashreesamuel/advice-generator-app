const retrieveAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  console.log(data);

  document.getElementById("title").innerHTML = `Advice #${data.slip.id}`;
  document.getElementById("text").innerHTML = `"${data.slip.advice}"`;
}

retrieveAdvice()
