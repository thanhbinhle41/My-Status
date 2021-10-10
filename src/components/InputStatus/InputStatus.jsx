import React from 'react'
import './InputStatus.css'
import Ava from './Ava.jpg' 
import './ResponsiveIS.css'



function InputStatus({showPopUp, setShowPopUp, status, setStatus}) {
    return (
        <>
        <div className='status_wrapper'>
            <div className="message_box">
                <div className = 'message_box-top'>
                    <img src={Ava} alt='Ava' className='ava_img'></img>
                    <input type='text' placeholder='Bình ơi, bạn đang nghĩ gì' className='input_message'
                    onClick={() => setShowPopUp(true)}>
                    </input>
                </div>
                <div className='message_box-bot'>
                    <div className='message_box-bot-option'>
                        <i class="fas fa-video video_icon"></i>
                        <h3>Video trực tiếp</h3>
                    </div>
                    <div className='message_box-bot-option'>
                        <i class="fas fa-photo-video photo-video_icon"></i>
                        <h3>Ảnh/Video</h3>
                    </div>
                    <div className='message_box-bot-option'>
                        <i class="far fa-laugh-beam emoji_icon"></i>
                        <h3>Ảnh/Video</h3>
                    </div>
                </div> 
            </div>

            {status.map((item) =>
                <div className='post'>
                    <div className='post_top'>
                        <div className='post_top-heading'>
                            <img src={Ava} alt='Ava' className='ava_img'></img>
                            <div className='post_top-info'>
                                <h4>Bình Béo Bệu</h4>
                                <p>4 giờ <i class="fas fa-globe-europe"></i></p>
                            </div>
                        </div>
                        <div className='status_option'>
                            <i class="fas fa-ellipsis-h"></i>
                            <div className='post_options'>
                                <div className='post_options-wrapper'>
                                    <i class="far fa-trash-alt"></i>
                                    <h4>Xoá bài viết</h4>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='post_mid'>
                        <div className='post_message'>
                            <p>{item.title}</p>
                        </div>
                        {item.haveImage ? 
                        <div className='post_img'>
                            <img src={item.image} className='status_image' alt='alo123'></img>
                        </div>
                        : null}
                        
                    </div>
                    <div className='post_bot'>
                        <div className='post_bot-listOptions'>
                            <div className='post_bot-option'>
                                <i class="far fa-thumbs-up"></i>
                                <p>Thích</p>
                            </div>
                            <div className='post_bot-option'>
                                <i class="far fa-comment"></i>
                                <p>Bình luận</p>
                            </div>
                            <div className='post_bot-option'>
                                <i class="fas fa-share"></i>
                                <p>Share</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            )}
            
        </div>
        
     
        </>
    )
}

export default InputStatus;
