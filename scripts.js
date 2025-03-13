const root = document.documentElement;

// Access a CSS variable's value
const snapshot_amount_big = getComputedStyle(root).getPropertyValue('--snapshot-amount-big');
const snapshot_amount_small= getComputedStyle(root).getPropertyValue('--snapshot-amount-small');

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


  function randomizeProfilePicture() {

    const profilePics = [
        'images/image_2.jpg',
        'images/image_3.jpg',
        'images/image_4.jpg',
        'images/image_5.jpg',
        'images/image_6.jpg'

    ];


    const randomIndex = Math.floor(Math.random() * profilePics.length);
    const randomPic = profilePics[randomIndex];


    document.getElementById("profile-pic").src = randomPic;
}

  function embedPDF(name,id){
    console.log("Searching for: pdf/"+name+".pdf");
    PDFObject.embed("pdf/"+name+".pdf", "#"+id)
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

                    console.log(screen.width)
                    if (screen.width<=900){
                      maxVideos=snapshot_amount_small
                      
                    }
                    else{
                      maxVideos=snapshot_amount_big
                    }
                    
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
                            interestingStuffContainer.innerHTML+= '<div class="fakeimg" > <a href='+videoUrl+' target="_blank" rel="noopener noreferrer"> <img class= "youtube-thumbnail" src='+videoThumbnail+' ><br></a><div class= video-title>' +videoTitle+ '</div></div><br>'
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
 
 window.onload = function() {
    randomizeProfilePicture();
};

function typeText() {
    const sentences = [
      'Learning by doing...',
      'Viel zu tun...',
      'Aprender haciendo...',
    ];
  
    let index = 0;
    let text = sentences[Math.floor(Math.random() * sentences.length)]; // Initialize with random sentence
  
    function type() {
      if (index < text.length) {
        document.getElementById('typing-effect').textContent += text.charAt(index);
        index++;
        setTimeout(type, 150); // Typing speed
      }
    }
  
    type(); // Start typing the selected sentence
  }
  
  window.onload = typeText;
  
  function toggleNavbar() {
    const navbar = document.getElementById('navbar-links');
    navbar.classList.toggle('active'); // Toggle the 'active' class
}

  