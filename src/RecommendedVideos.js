import React, { useEffect, useState } from 'react';
import "./recommended.css";
import VideoCard from "./VideoCard";
import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function RecommendedVideos() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
        const jsonData = await response.json();
        setData(jsonData.data.posts);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  return (
    <div className="recommended">
      <FilterBar />

      <div className="Cover">
        <img src="./youtube.jpg" className="cover-image" alt='coveer-image'/>
      </div>

      <h2>Recommended</h2>
      
      <div className="recommendedVideo">
         {
          data?.map((vedio) =>
            <Link to={`/vedioplayer/${page}/${vedio.postId}`} style={{textDecoration: "none",color:"black"}}> 
              <VideoCard
                image={vedio.submission.thumbnail}
                title={vedio.submission.title}
                channel={vedio.creator.handle}
                channelImage={vedio.creator.pic}
                comments= {vedio.comment.count}
                reactions= {vedio.reaction.count} 
              />
            </Link>
          )

        }
        
      </div>

      
      
      <Button className="btn-previous" variant="contained" onClick={handlePrevPage} disabled={page === 1}>Previous</Button>
      <Button className="btn-next" variant="contained" onClick={handleNextPage}>Next</Button>
      
    </div>
  );
}

export default RecommendedVideos;
