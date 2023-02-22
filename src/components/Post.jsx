import React from 'react';

const Post = () => {
    return (
        <div className='col-3 post'>
            <img className='post-img' src="https://azureams.org/assets/thumbnails/swift2.jpg" alt="" />
            <div className='post-details'>
              <div className='author d-flex justify-content-between'>
                <div className='author-name d-flex '> 
                  <p><i className="fas fa-user-edit mt-1" aria-hidden="true"></i>AzureAms PR Team</p>
                </div>
                <div className='post-type-blog'>
                  <p>Blog</p>
                </div>
              </div>
              <div className='post-header'>Giới thiệu về ngôn ngữ lập trình Swift</div>
              <div className='post-desc'>
                Swift là gì? Swift là một ngôn ngữ lập trình hướng đối tượng để phát triển các hệ điều hành của Apple như iOS, macOS,.
              </div>
            </div>
          </div>
    );
};

export default Post;