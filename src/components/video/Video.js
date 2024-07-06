import React from 'react'

import videos from'../../models/videoData.json'

function Video() {
  //comment these fetch API fun as of now...do not remove the lines
   fetch("../../models/videoData.json")
  .then(response=>response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Problem with fetching data!!",error))
 return (
    <div>
      <div className ="container">
        <div className ="row">
          {
            videos.map((video,key)=>(
              <div key={key} className="col-mad-4"> 
              <a href={`http://youtube.com/watch?v=${video.img_id}`}>
              <div className="card" >
              <img src={`http://img.youtube.com/vi/${video.img_id}/0.jpg`} className="img-thumbnail" alt={video.title}/>              
             <div className="card-body">
             <h5 className="card-title">{video.title}</h5>
             
             <p className="card-text">{video.channelName}</p>
             <small>
             {video.viewsCount} views-{video.likesCount} likes-{""} 
             {video.durations}m
             </small>
            
             </div>
       </div>
       </a>
            </div>
            ))
          }
       </div>
       </div>

    </div>
)

}

export default Video
