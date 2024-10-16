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
    console.log("Searching for: pdf/"+id+".pdf");
    PDFObject.embed("pdf/"+id+".pdf", "#"+id)
  }

  function getLastYoutubeVideo(){
            fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzgOgt27CN7sE6LqK-bA89w&maxResults=50&order=searchSortUnspecified&key=AIzaSyAOroVaBFLReOQ9SfUbHfY6EChLvRSCCCE")
            .then((results) => {return results.json()})
            .then((data)=> {


                const interestingStuffContainer=document.querySelector(".interesting-stuff");
                

                if(data.error){

                    interestingStuffContainer.innerHTML+= '<div class="fakeimg" > Error '+data.error.code+" while requesting video list via Youtube API : "+data.error.message+' </div>'

                }

                else{

                    let videos =data.items;
                    for (var a=[],i=0;i<videos.length;++i) a[i]=i;
                    const shuffledArray=shuffle(a);

                    maxVideos=3
                    count=0
                    shuffledArray.forEach(index => {

                        if (videos[index].id.kind!="youtube#video"){
                            //do nothing
                        }
                        else if(count==maxVideos){
                            //do nothing
                        }
                        else{

                            let videoThumbnail = videos[index].snippet.thumbnails.high.url;
                            let videoUrl= "https://www.youtube.com/watch?v="+videos[index].id.videoId ;
                            let videoTitle = videos[index].snippet.title                  
                            interestingStuffContainer.innerHTML+= '<div class="fakeimg" > <a href='+videoUrl+' target="_blank" rel="noopener noreferrer"> <img class= "youtube-thumbnail" src='+videoThumbnail+' ></a>' +videoTitle+ '</div><br>'
                            count+=1

                        }
                    }
                    )
                }
            }  
            );
            }

            function shuffle(array) {
                var tmp, current, top = array.length;
                if(top) while(--top) {
                  current = Math.floor(Math.random() * (top + 1));
                  tmp = array[current];
                  array[current] = array[top];
                  array[top] = tmp;
                }
                return array;
              }
              
 getLastYoutubeVideo()     
 
 