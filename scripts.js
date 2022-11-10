function showButtonDiv(className, id){


    const divClassName = className.replace("btn_","")
    const arrayOfDivs= document.getElementsByClassName("div_"+divClassName)


    for (let element of arrayOfDivs){
        if (element.id==id){

            element.removeAttribute("hidden")
        }

        else{
            element.setAttribute("hidden","hidden");
        }

    }
    

  }

  function embedPDF(id){
    
    PDFObject.embed("pdf/"+id+".pdf", "#"+id)
  }

  function getLastYoutubeVideo(){
            fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzgOgt27CN7sE6LqK-bA89w&maxResults=3&order=date&key=AIzaSyAOroVaBFLReOQ9SfUbHfY6EChLvRSCCCE")
            .then((results) => {return results.json()})
            .then((data)=> {

                const interestingStuffContainer=document.querySelector(".interesting-stuff");
                

                if(data.error){

                    interestingStuffContainer.innerHTML+= '<div class="fakeimg" > Error '+data.error.code+" : "+data.error.message+' </div>'

                
                    fetch('./youtube_static_list.json')
                    .then((response) => {return response.json() })
                    .then((json) => console.log(json));

                }

                else{

                    let videos =data.items;
                    videos.forEach(video => {
                    let videoThumbnail = video.snippet.thumbnails.high.url;
                    let videoUrl= "https://www.youtube.com/watch?v="+video.id.videoId ;
                    let videoTitle = video.snippet.title                  
                    interestingStuffContainer.innerHTML+= '<div class="fakeimg" > <a href='+videoUrl+' target="_blank" rel="noopener noreferrer"> <img class= "youtube-thumbnail" src='+videoThumbnail+' ></a>' +videoTitle+ '</div><br>'
                    }
                    )
                }
            }  
            );
            }

 getLastYoutubeVideo()       