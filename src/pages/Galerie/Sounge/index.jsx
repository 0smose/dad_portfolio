import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';



const Sounge = () => {

 return ( 

  <div>
  
    <NavigationArrow />
    <div className="banner" id="sounge-banner">
     </div>

    <div className="wrapper-youtube">

     

        {/* <h2 className="title" id="sounge">Sounge</h2>   */}
   
        <div className="youtube-video mb-5">

          <iframe className='video-format' src="https://www.youtube.com/embed/f9EBTGt-svE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>

        <div className="youtube-video mb-5">

          <iframe className='video-format' src="https://www.youtube.com/embed/9K8YkLgZKx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        
        </div>

        <div className="youtube-video mb-5">

          <iframe className='video-format' src="https://www.youtube.com/embed/zv3w4UoE3Us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>  


        <div className="youtube-video mb-5">

          <iframe className='video-format' src="https://www.youtube.com/embed/JeHz9hy4Tcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div> 


        <div className="youtube-video mb-5">

          <iframe className='video-format' src="https://www.youtube.com/embed/YyMgNLgel7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div> 

        <div className="youtube-video mb-5">

          <iframe className='video-format' src="https://www.youtube.com/embed/t7U9fmZYcA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>

      
      </div>

      </div>
   );
}
 
export default Sounge;