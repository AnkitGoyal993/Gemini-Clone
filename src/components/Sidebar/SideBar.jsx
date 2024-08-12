import React, { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context';
function SideBar() {
    const [extended,setExtended] = useState(false);
     const {onSent,prevPrompts,setPrevPrompts} = useContext(Context)
  return (
    <div className='SideBar'>
      <div className="top">
        <img className='menu' src={assets.menu_icon} onClick={ () => setExtended((prev) =>!prev)} alt="" />
        <div className='new-chat'>
            <img src={assets.plus_icon} alt="" />
           {extended? <p>New Chat</p>:null}
        </div>
        {
            extended? 
            <div className="recent">
                <p className='recent-title'>Recent</p>
                {prevPrompts.map((item,index) => {
                  return (

                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>{item} ...</p> 
                    </div>
                  )
                })}
            </div>:null
        }
      </div>
      <div className='bottom'>
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?  <p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?  <p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?  <p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default SideBar
