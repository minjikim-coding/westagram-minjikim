import React from 'react';
import "./Main.css";


export class Main extends React.Component{
  constructor() {
    super();//constructor 컴포넌트 저장소(생성자 메소드)

    this.state = {//이 컴포넌트의 state설정(초기 값)
      commendValue : "",//input의 value 값이 들어갈 예정
      commendArr : [],//빈 배열을 하나 만들어준다(map 함수로 배열이 쌓일 곳- 버튼을 클릭했을 때 사용될 예정)
    }
    
}

commendValueChange = (e) => {//댓글 input에 실행될 이벤트함수
  if(e.keyCode === 13 && e.target.value){//만약 엔터 이벤트와 값이 타겟안에 있을 때
    this.setState({
      commendValue : "",//값을 비워주고 
      commendArr : this.state.commendArr.concat(this.state.commendValue),//빈 배열에 인풋 값을 붙여준다
    })
  } else if(e.keyCode === 13){
    this.setState({
      commendValue : "",
    })
  } else if(!e.target.value) {
    this.setState({
      commendValue : "",
      submitColor : {color : "#B1D6F7"},
    })
  } else {
    this.setState({
      commendValue : e.target.value,
      submitColor : {color : "#0095F6"},
    })
  }
}

commendUp = () => {
  if(this.state.commendValue){
    this.setState({
      commendValue : "",
      commendArr : this.state.commendArr.concat(this.state.commendValue),
    })
  }
}

render() {
  let commendStyle = {
    marginBottom : "3px",
    width : "100%",
    wordBreak : "normal"
  }
  let userStyle = {
    fontWeight : "600",
  }

  console.log(this.state.commendArr)
  return (
<>
   <div className="big-box">
  
     <div className="container">  
       <nav className="navbar">
            <div className="navbar__logo">  
              <i className="fab fa-instagram"></i>    
            </div>
            <div className="search">
              <input type="text" placeholder="                      검색"/>
            </div>
            <ul className="navbar__icons">
               <li><i className="fas fa-home"></i></li>
               <li><i className="fas fa-paper-plane"></i></li>
               <li><i className="fas fa-compass"></i></li>
               <li><i className="far fa-heart"></i></li>
               <li><i className="far fa-user-circle"></i></li>
            </ul>
        </nav>
       </div>
    </div>


  <div className="main_container">
      <div className="main-box">
        <div className="feeds">
            <div className="storys-container"> 
              <ul className="storys">
                 <li className="story">
                        <div className="story-image">
                          <div className="story-image-cover">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCSEUcLf7yE_zhrzVtMhKzjsU7LxNo74aBlHZ5jdowXcuKYlS7&usqp=CAU" width="53px" height="53px" alt="사진" />
                          </div>
                        </div>
                        <div className="story-name">Taeyeon</div>
                 </li>
                 <li className="story">
                      <div className="story-image">
                          <div className="story-image-cover">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB2Cm2Rlguwt4ok4riGsPjH1JiPvCFojW13alvu4SSqBrPRMhz&usqp=CAU" width="53px" height="53px" alt="사진" />
                          </div>
                      </div>
                        <div className="story-name">eight</div>
                 </li>
                 <li className="story">
                     <div className="story-image">
                        <div className="story-image-cover">
                            <img src="https://bit.ly/fcc-relaxing-cat" width="53px" height="53px" alt="사진" />
                        </div>
                     </div>
                        <div className="story-name">catstagram</div>
                </li>
              </ul>
            </div>
            <article>
       <div className="post">
           <div className="post-who">
                <div className="post-who-img">
                   <img className="post-pic" src="https://ca.slack-edge.com/TH0U6FBTN-U011AUSBRJM-b4715288f0f6-48" width="32px" height="32px" />
                </div>
                   <span className="post-who-name">minjikim</span>
                    <a href="#more-page" className="post-who-more">
                <svg className="post-who-more-img " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
                    <circle cx="8" cy="24" r="4.5"></circle>
                    <circle cx="24" cy="24" r="4.5"></circle >
                    <circle cx="40" cy="24" r="4.5"></circle>
                </svg>
                    </a>
                </div>
          </div>
            <div className="post-photo">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEWY4Xgu7hIll-nJsQexwRtoTC-IjrNUCs8mU-_HPcroVH8NAc&usqp=CAU" width="613px" height="620px" />
           </div>
           <div className="post-about">
              <div className="post-do">
                <div className="post-doLeft">
                  <div className="post-do-like">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" width="24px" height="24px" />            
                  </div>
                <div className="post-do-commend">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" width="24px" height="24px" />
                </div>
                <div className="post-do-share">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" width="24px" height="24px" />
                </div>
            <div className="post-do-bookmark">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"width="24px" height="24px" />
                </div>
               </div>
              </div>
            </div> 
            <div className="post-who-like">좋아요 854,565개
            </div>
            <div className="post-description">
                <a className="post-description-name">minjikim</a>
                <span className="best-comment">로그인창 라벨 올리기, 비밀번호 표시, 스토리 넘기기, ... 모달창, 댓글추가,</span>
            </div>
         <div className="commend"> <div className="commend">{this.state.commendArr.map(x => <div style={commendStyle}><span style={userStyle}>people </span>{x}</div>)}</div> 
         </div>
            <div className="post-time">2시간 전</div>
              <div className="commend-container">
              <form className="commend-box" onSubmit={this.submitNofresh}>{/*폼태그 했는데 계속 엔터시 리로드됨*/}
              <input onChange={this.commendValueChange} value={this.state.commendValue} className="commend-article" placeholder="댓글 달기..."/>
                      <button type="submit" onClick={this.commendUp} style={this.state.submitColor} className="commend-upload">게시</button>
                </form>
            </div>          
    </article>
        </div>
       </div>
    </div>
   
  
   
         <div className="main-right">
            <div className="my-profile">
                <div className="my-profile-img">
                  <img className="profile-pic" src="https://ca.slack-edge.com/TH0U6FBTN-U011AUSBRJM-b4715288f0f6-48" width="56px" height="56px" />
            <div className="my-profile-txt">
               <div className="my-profile-name">김민지</div>
               </div>
            </div>
            <div className="recommend">
                <div className="recommend-nav">
                  <div className="recommend-title">회원님을 위한 추천</div>
                    <a href="#"className="recommend-all">모두 보기</a>
                  </div>
                <div className="recommend-profile">
                  <div className="botc-profile">
                    <div className="botc-left">
                      <div className="botc-txt">
                        <div className="botc-id">
                          <img className="profile-pic" src="https://bit.ly/fcc-relaxing-cat" width="32px" height="32px" />
                        
                           <span className="botc-know">minjikim123</span>
                    
                           <button type ="button" className="botc-follow">팔로우</button>
                      </div>
                        <div className="botc-id">
                          <img className="profile-pic" src="https://bit.ly/fcc-relaxing-cat" width="32px" height="32px" />
                    
                           <span className="botc-know">minjikim123</span>
                
                            <button type ="button" className="botc-follow">팔로우</button>
                        </div>
                <div className="botc-id">
                   <img className="profile-pic" src="https://bit.ly/fcc-relaxing-cat" width="32px" height="32px" />
                
                   <span className="botc-know">minjikim123</span>
            
                    <button type ="button" className="botc-follow">팔로우</button>
                </div>
                <div className="botc-id">
                   <img className="profile-pic" src="https://bit.ly/fcc-relaxing-cat" width="32px" height="32px" />
            
                   <span className="botc-know">minjikim123</span>
        
                   <button type ="button" className="botc-follow">팔로우</button>
               </div>
              <div className="botc-id">
                  <img className="profile-pic" src="https://bit.ly/fcc-relaxing-cat" width="32px" height="32px" />
        
                  <span className="botc-know">minjikim123</span>
    
                    <button type ="button" className="botc-follow">팔로우</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>

            <div className="footer">
                <ul className="footer-list">
                    <li>소개</li>
                    <li>도움말</li>
                    <li>홍보 센터</li>
                    <li>API</li>
                    <li>채용 정보</li>
                    <li>개인정보처리방침</li>
                    <li>약관</li>
                    <li>위치</li>
                    <li>인기계정</li>
                    <li>해시태그</li>
                    <li>언어</li>
               </ul>
           <div className="copyright">© 2020 INSTAGRAM FROM FACEBOOK</div>
                </div>
            </div>
        </div>
   
</>
  )
 }
}
     
        
    

export default Main;