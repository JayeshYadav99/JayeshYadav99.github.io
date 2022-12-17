const messsageText = document.getElementById("messageText")
const apiKey = ""
const client = new StreamChat(apiKey);

const init = (url, username)=>{
    fetch(url,{
       headers: {
           'Content-Type': 'application/json'
       },
       method: "post",
       body: JSON.stringify({username})
   }).then((data)=>{
       return data.json()
   }).then((response)=>{
       const { token }  = response
        Chat(token, username)
   })
}

function Chat(token, id){

    client.setUser(
        {
            id,
            name: 'Client',
            image: 'https://getstream.io/random_svg/?name=John',
        },
        token
    );
    
    const channel = client.channel('messaging', '', {
        // add as many custom fields as you'd like
        image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
        name: "Talk About Anything",
        members: ['admin', 'okon'],
      });
    
    // fetch the channel state, subscribe to future updates
    const state = channel.watch();
    
    // What is our current channel state? We get to know that from here
    async function getState(){
        return await state
    }
    
    // Get historical messages
    getState().then((data)=>{
        data.messages.map((message)=>{
            singleMessageDisplay(message)
            })
    })
    
    // Listen for new messages
    channel.on('message.new', event => {
        const message = channel.state.messages[channel.state.messages.length-1]
        singleMessageDisplay(message)
    });
        
    
    // Send message to the channel
    messsageText.addEventListener("keypress", (e)=>{
        if ( e.keyCode==13 ){
            // clean message input a bit
            const text = e.target.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
            if (text === "") {
                return -1; //empty messages cannot be sent
            }else{
                channel.sendMessage({
                    text: e.target.value
                })
                e.target.value = ""
            }
    
        }
    })
    
    
    // Push single message to display. This function pushes a chat bubble to the UI when you hit enter and there is network connection
    const singleMessageDisplay = (message) => {
        if ( message.user.id === client.user.id){
            const div = document.createElement('div')
            div.className = "chatbox__body__message chatbox__body__message--right"        
            div.innerHTML = BubbleTemplate(message.user.name, message.user.id, message.text, message.created_at, client.user.image)
            document.getElementById('right-msg').appendChild(div)
        }
    
        if (message.user.id !== client.user.id){
            const div = document.createElement('div')
            div.className = "chatbox__body__message chatbox__body__message--left"        
            div.innerHTML = BubbleTemplate(message.user.name, message.user.id, message.text, message.created_at, message.user.image)
            document.getElementById('left-msg').appendChild(div)
        }
    }
    

}

const url = "https://stream-token-genetor.herokuapp.com/get-token"
const username = "okon"

init(url, username)

