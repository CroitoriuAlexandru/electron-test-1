
const information = document.getElementById('info')
const pingPongBtn = document.getElementById('pingPongBtn')

information.innerText = 
`
    This app is using Chrome (v${versions.chrome()}), 
    Node.js (v${versions.node()}), 
    and Electron (v${versions.electron()})
`


pingPongBtn.onclick = async () => {
    const response = await versions.ping()
    console.log(response)
}