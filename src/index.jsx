import './style.css'

const data = state({output:'',input:''})


function send()
{
  fetch('/api/command',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: data.input})
    })
    .then(response => response.text())
    .then(result => data.output = result)
}

const main = 
<div class="chat-container">
  {data.output}
  <div class="command">
    <input type="text" model={data.input}/>
    <button on:click={send}>Send</button>
  </div>
</div>


main.$parent(document.body)