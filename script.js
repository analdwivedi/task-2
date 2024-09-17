let container = document.getElementById('container');

let link2 = document.createElement('a');
link2.innerHTML = 'Watch a video to access youtube';
link2.setAttribute('src', 'https://www.youtube.com/');
link2.className = 'mylink';
link2.style.color = 'rgb(85, 26, 139)';
link2.style.textDecoration = 'underline';
container.appendChild(link2);

let link = document.createElement('video');
let linksrc = document.createElement('source');
link.style.width = '70%';
link.style.height = '70%';
link.className = 'myvideo';
link.src = '5310858-uhd_3840_2160_25fps.mp4';
link.type = 'video/mp4';
link.autoplay = 'autoplay';
container.appendChild(link);
link.style.display = 'none';


link2.onclick = function () {
    link2.innerHTML  ='Redirecting you after video is finished playing in . Thankyou for your patience';
    link.style.display = 'block';
    link2.style.color = 'red';
    link2.style.textDecoration = 'none';
    let myvideo = document.getElementsByClassName('myvideo')[0];
    myvideo.onended = function () {
        window.location.replace('https://www.youtube.com/');
    }
    let seconds = 12;
    function displaySeconds() {
        seconds--;
        link2.innerHTML = `Redirecting you after video is finished playing in ${seconds} seconds. Thankyou for your patience`;
    }
    setInterval(displaySeconds, 1000);
}






