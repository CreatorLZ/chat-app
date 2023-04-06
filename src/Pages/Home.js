import React, { useEffect, useState } from 'react'
import Chats from '../Components/chats'
import { Chatinfo, Chatscontainer, Friendpic, Lastmessage } from '../Components/Chatstyels'
import { Bottomright, Buttomicons, Button, Chatsdiv,Container, Friendicons, Friendinfo, Friendname, Left,  Message, Messagecontent, Messageinfo, Messages, Right, Sendmessage,  Topright,  Usermessage, Userpicture, Wrapper, Wrappermobile } from '../Components/Homestyles'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import Spinneranimation from '../Components/Spinner'






const Home = () => {

  const [chatpage, setChatPage] = useState(true)
  const [animation, setAnimation] = useState(false);
 
  //animattion on re-render
  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setChatPage(!chatpage);
  }



 
  return (
    <Container>
     { animation ? <Spinneranimation/> : <Wrapper>
        <Left>
         <Navbar/>
          <Search  />
          <h1 style={{ color: "#ebe8e4", fontWeight: "bold", padding: "10px" }}>Chats</h1>
          <Chatsdiv>
           <Chats/>
          </Chatsdiv>
        </Left>
        <Right>
          <Topright>
            <Friendinfo>
              <Userpicture src='/assets/images/person2.jpg' alt='user' />
              <Friendname>Deaneryes drhakaryes</Friendname>
            </Friendinfo>
            <Friendicons>
              <img src='/assets/images/icons8-brightness-64.png' alt='light' />
              <img style={{width:"20px", height:"20px"}} src='/assets/images/whitecall.png' alt='phone' />
            </Friendicons>
          </Topright>
          <Messages>
            <Message direction="row-reverse">
              <Messageinfo>
                <Userpicture src='/assets/images/person3.jpg' alt='user' />
                <p>just now</p>
              </Messageinfo>
              <Messagecontent>
                <Usermessage og >Yo wetin dey sup!</Usermessage>
                <img src='' alt='' />
              </Messagecontent>
            </Message>

            <Message >
              <Messageinfo>
                <Userpicture src='/assets/images/person2.jpg' alt='user' />
                <p>just now</p>
              </Messageinfo>
              <Messagecontent>
                <Usermessage>i dey!</Usermessage>
                <img src='' alt='' />
              </Messagecontent>
            </Message>

          </Messages>
          <Bottomright>
            <Sendmessage type="text" placeholder='Type something...' />
            <Buttomicons>
              <img src='/assets/images/attach.png' alt='pin' />
              <img src='/assets/images/picture.png' alt='profile' />
              <Button>Send</Button>
            </Buttomicons>
          </Bottomright>
        </Right>
      </Wrapper>}


      <Wrappermobile>

        {chatpage ? <Left>
          <Navbar/>
          <Search/>
          <h1 style={{ color: "#ebe8e4", fontWeight: "bold", padding: "10px" }}>Chats</h1>
          <Chatsdiv >
            <Chats/>
          </Chatsdiv>
        </Left> :
          animation ? <Spinneranimation /> :
            <Right>
              <Topright>
                <Friendinfo>
                  <img src='/assets/images/arrow-89-16.png' alt="back" style={{ marginRight: "15px" }} onClick={handleClick} />
                  <Userpicture src='/assets/images/person2.jpg' alt='user' />
                  <Friendname>Deaneryes drhakaryes</Friendname>
                </Friendinfo>
                <Friendicons>
                  <img style={{width:"20px", height:"20px"}} src='/assets/images/whitecall.png' alt='phone' />
                </Friendicons>
              </Topright>
              <Messages>
                <Message direction="row-reverse">
                  <Messageinfo>
                    <Userpicture src='/assets/images/person3.jpg' alt='user' />
                    <p>just now</p>
                  </Messageinfo>
                  <Messagecontent>
                    <Usermessage og >Yo wetin dey sup!</Usermessage>
                    <img src='' alt='' />
                  </Messagecontent>
                </Message>

                <Message >
                  <Messageinfo>
                    <Userpicture src='/assets/images/person2.jpg' alt='user' />
                    <p>just now</p>
                  </Messageinfo>
                  <Messagecontent>
                    <Usermessage>i dey!</Usermessage>
                    <img src='' alt='' />
                  </Messagecontent>
                </Message>

              </Messages>
              <Bottomright>
                <Sendmessage type="text" placeholder='Type something...' />
                <Buttomicons>
                  <img src='/assets/images/attach.png' alt='pin' />
                  <img src='/assets/images/picture.png' alt='profile' />
                  <Button >Send</Button>
                </Buttomicons>
              </Bottomright>
            </Right>}

      </Wrappermobile>

    </Container>
  )
}

export default Home
