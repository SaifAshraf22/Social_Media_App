import'./rightbar.css'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg'src='https://thumbs.dreamstime.com/z/red-gift-box-gold-ribbon-16824149.jpg'alt=''/>
          <span className='bithdayText'>
            <b>sadio mané </b>and <b>3 others friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/256f0118954529.562d231c1c7c5.jpg' alt=''/>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendsList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg'src='https://th.bing.com/th/id/OIP.eD3e6ZbiSY0fkFbgDsOktgAAAA?pid=ImgDet&rs=1'alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>M.Aboutrika</span>
          </li>
        </ul>
        <ul className='rightbarFriendsList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg'src='https://s.hs-data.com/bilder/spieler/gross/368977.jpg'alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>O.Marmosh</span>
          </li>
        </ul>
        <ul className='rightbarFriendsList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg'src='https://th.bing.com/th/id/OIP.YnMDa-OEH4A0KOg7VD1xuQHaEK?pid=ImgDet&rs=1'alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>M.Trezeguet</span>
          </li>
        </ul>
        <ul className='rightbarFriendsList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg'src='https://th.bing.com/th/id/OIP.0PEorHWydpiGQCXjQ0ElzQHaEK?pid=ImgDet&w=207&h=116&c=7&dpr=1.3'alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>M.Elneny</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar