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
            fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzgOgt27CN7sE6LqK-bA89w&maxResults=10&order=date&key=AIzaSyAOroVaBFLReOQ9SfUbHfY6EChLvRSCCCE")
            .then((results) => {return results.json()})
            .then((data)=> {
                let videos =data.items;
                let shouldSkip= false;
                let counter=0;
                
                videos.forEach(video => {
                    let randomBinary = Math.round(Math.random());


                    if (counter>=3){
                        return
                    }

                    else if (randomBinary===1){
                        let videoThumbnail = video.snippet.thumbnails.high.url;
                        let videoUrl= "https://www.youtube.com/watch?v="+video.id.videoId ;
                        let videoTitle = video.snippet.title
                        interestingStuffContainer=document.querySelector(".interesting-stuff");
                        interestingStuffContainer.innerHTML+= '<div class="fakeimg" > <a href='+videoUrl+' target="_blank" rel="noopener noreferrer"> <img class= "youtube-thumbnail" src='+videoThumbnail+' ></a>' +videoTitle+ '</div><br>'
                        counter+=1;
                    }

                    else{

                    }
                    
                });
            })
        
        }

 getLastYoutubeVideo()     
 
 