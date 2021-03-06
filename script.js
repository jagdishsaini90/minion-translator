const input = document.querySelector('#input');
const output = document.querySelector('#output');
const button = document.querySelector('#button');

button.addEventListener('click', async () => {
  output.innerHTML = "Translating in progress...."
  await fetch(`https://api.funtranslations.com/translate/minion.json?text=${input.value}`)
    .then(res => res.json())
    .then(res => output.innerHTML = res.contents.translated)
  .catch(error => output.innerHTML = error)
})