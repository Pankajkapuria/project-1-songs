let songIndex=0;
let audioElement=new Audio('7.mp3');
let masterPaly=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myPressBar');
let gifs=document.getElementById('gifs');
let masterSong=document.getElementById('masterSong');
let songitem=Array.from(document.getElementsByClassName('songItem'));
let timeStart=document.getElementById('timeStart');
let timeend=document.getElementById('timeend');
let background=document.getElementById('background');


let songs=[
    {songName:"Lut_gaye_Full_song" ,filePath:"1.mp3",coverpath:'1.jpg'},
    {songName:"Badri Ki Dulhania (Title Track)" ,filePath:"2.mp3",coverpath:'2.jpg'},
    {songName:"Wold best_song" ,filePath:"3.mp3",coverpath:'3.jpg'},
    {songName:"BAITHE BAITHE LYRICS – STEBIN BEN" ,filePath:"4.mp3",coverpath:'4.jpg'},
    {songName:"Banjaara (From Ek Villain) - Mohd. Irfan" ,filePath:"5.mp3",coverpath:'5.jpg'},
    {songName:"Bhool Bhulaiyaa 2|| Kartik A" ,filePath:"6.mp3",coverpath:'6.jpg'},
    {songName:"Let Me Down Slowly" ,filePath:"7.mp3",coverpath:'7.jpg'},
    {songName:"unstoppable sia quotes " ,filePath:"8.mp3",coverpath:'8.jpg'},
    {songName:"milne-hai-mujhse-aayi" ,filePath:"9.mp3",coverpath:'9.jpg'},
    {songName:"aashiqui 2 mashup song lyrics" ,filePath:"10.mp3",coverpath:'10.jpg'},
    {songName:"bekhayali_Full_song" ,filePath:"11.mp3",coverpath:'11.jpg'},
    // {songName:"decewaye_Full_song" ,filePath:"8.mp3",coverpath:'cover3.jpg'},
    // {songName:"decewaye_Full_song" ,filePath:"8.mp3",coverpath:'cover3.jpg'},

]


songitem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
})

// music play
masterPaly.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPaly.classList.remove('fa-play-circle');
        masterPaly.classList.add('fa-pause-circle');
        gifs.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPaly.classList.remove('fa-pause-circle');
        masterPaly.classList.add('fa-play-circle');
        gifs.style.opacity=0.5;
    }
})

function time_convet(e){
    m = Math.floor(e % 3600 / 60);
    s = Math.floor(e % 60);
    if(s<=9 && m<=9){
        return '0'+m + ':0' + s;
    }
    if(s<=9 ){
        return m + ':0' + s;
    }
    if(m<=9 ){
        return '0'+ m + ':' + s;
    }
    return m + ':' + s;
}





// progressbar Update
audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration*100));
    // console.log(progress);
    myprogressbar.value=progress;
    timeStart.innerText=time_convet(audioElement.currentTime);
    timeend.innerText=time_convet(audioElement.duration);
})

// song update from change progressbar value
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})



const makeallpalys=()=>{
    Array.from(document.getElementsByClassName('songplayinlist')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

    })
}




Array.from(document.getElementsByClassName('songplayinlist')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // songs[i].filePath.play();
        songIndex=parseInt(e.target.id);
        makeallpalys();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioElement.src='${songnumber}.mp3';
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPaly.classList.remove('fa-play-circle');
        masterPaly.classList.add('fa-pause-circle');
        gifs.style.opacity=1;
        masterSong.innerText=songs[songIndex].songName;
        background.style.backgroundImage= "url("+songs[songIndex].coverpath+")";
        
    })
})

document.getElementById('nextButton').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=0;
        background.style.backgroundImage="url("+songs[songIndex].coverpath+")";
    }
    else{
        songIndex+=1;
        audioElement.src=songs[songIndex].filePath;
        background.style.backgroundImage="url("+songs[songIndex].coverpath+")";
        audioElement.currentTime=0;
        audioElement.play();
        masterPaly.classList.remove('fa-play-circle');
        masterPaly.classList.add('fa-pause-circle');
        gifs.style.opacity=1;
        masterSong.innerText=songs[songIndex].songName;
    }
    
})
document.getElementById('prevButton').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex-=1;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPaly.classList.remove('fa-play-circle');
        masterPaly.classList.add('fa-pause-circle');
        gifs.style.opacity=1;
        masterSong.innerText=songs[songIndex].songName;
        background.style.backgroundImage="url("+songs[songIndex].coverpath+")";
    }
    
})