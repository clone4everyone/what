import React from 'react';
import { useGlobalContext } from './Context';
const Mainbody = () => {
  const{chat,chatting,name,msg,callingname,add}=useGlobalContext();
  const contacts=[{
    img:"66.jpg",
    name:"Aashvi",
    description:"abe kaha h..",
    time:"2:45"
  },
  {
    img:"100.jpg",
    name:"Meera",
    description:"bye...",
    time:"2:14"
  },
  {
    img:"110.jpg",
    name:"Saanvi",
    description:"hmm..",
    time:"1:09"
  },
  {
    img:"b6.webp",
    name:"Sarika",
    description:"chl...",
    time:"3:35"
  }
,
{
  img:"d5.webp",
  name:"Uma",
  description:"kl...",
  time:"2:05"
}]


const check=()=>{
if(chatting===0){
  return <>
  <div>
    <div className='web'>
<div className='i-t'>
<img src='whatsweb.jpg'/>
<h2>
  WhatsApp Web
</h2>
<p className='send'>Send and receive messages without keeping your phone online.</p>
<p className='use'>
Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
</p>
</div>
<p className='send'>End-to-end encrypted</p>
    </div>
    </div></>
}
else{
  return <>





   <div className='outer-31'>
           <div className='outer-3-header'>
            <img className='list-img' src={chatting.img}/>
            <p className='name-time mar'>{chatting.name}</p>
           </div>
           <div className='v-c-s'>
            <div className='v-c'>
              <img className='c-video' src={chatting.video}/>
              <img className='c-call' src={chatting.call}/>
            </div>
            <div>
              <img className='c-search' src={chatting.search}/>
            </div>
           </div>
          </div>

          <div className='display-chats'>

            <div className='today'>
              
              <p>Messages are end-to-end encryped.No one outside of this chat,not even WhatsApp, can read or listen to them. </p>
           
            </div>
          {
           msg.map((elem)=>{
            return<>
            <div>
             <div className='text'>
              <div></div>
              <p className='ttext'>{elem.text}</p>
              </div> 
              <p className='num'>{elem.num}</p>
            </div>
            </>
           })
          }
          </div>

          <div className='lower'>
<img className="emoji" src={chatting.emoji}/>
<img className="add" src={chatting.add}/>


<form onSubmit={add} className='form'>
      <input className='input-2' type='text' placeholder='Contact Name' value={name} onChange={(e) => callingname(e.target.value)} />
       
      

        <button className='btn btn-dark addbtn'>Add</button>
      </form>

<img className="voice" src={chatting.voice}></img>
          </div>
  </>
}
}
  return (

    <> 
<div id="loader">
    <div id="wrapper">
      <div className="elem"><img src="logo192.png" className='app-logo'/> <h2>React WhatsApp</h2>  </div>
      <div className="elem"><h2>MADE BY</h2></div>
      <div id='krn' className="elem"><h2> CODER'X'  MR. KARAN </h2> </div>
      <div className='elem'><h2>ANIMATED BY </h2></div>
      <div className='elem lucky' ><h2>Master VAIBHAV NEGI </h2></div>

</div>
</div>




    <div className='most-outer'>
      
        <div className='most-outer-1'>
      <div className='outer-11'>
        <div><img className="newchat" src='newchat.png'/></div>
        <div><img className='call2' src='call2.png'/></div>
        <div><img className='story' src='story.jpg'/></div>
      </div>

      <div className='outer-12'>
        <div><img className="star" src='star.png'/></div>
        <div><img className="archieved" src='archieved.jpg'/></div>
        <div><img className="setting" src='setting.png'/></div>
      </div>
        </div>
        <div className='most-outer-2'>
 <div className='most-outer-21'>
  <div><h3>Chats</h3></div>
  <div className='most-outer-212'>
    <img className='newchat2'src='newchat.png'/>
    <img className='filter' src='filter.png'/>
  </div>
 </div>

<div className='most-outer-22'>
  <input placeholder='Search' className='input'/>
</div>


<div className='most-outer-23'>
{contacts.map((elem)=>{
  return <>
  <div className='list' onClick={()=>chat(elem.img,elem.name)}>
    <div className='img-div'>
      <img className='list-img' src={elem.img}/></div>
    <div className='about'>
      <div className='name'>
        
        <div className='name-time'>
          <p>{elem.name}</p>
        <p className='light-black'>{elem.time}</p> 
        </div>
        </div>
      <div className='description'><p>{elem.description}</p></div>
    </div>
  </div>
  </>
})}
</div>
        </div>


        <div className='most-outer-3'>
        {check()}
        </div>
      
    </div>
    </>
   
  );
}

export default Mainbody;
