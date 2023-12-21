const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//  Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        captureStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = captureStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log("Whoops, error here:", error);
    }
}

button.addEventListener("click", async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Rest Button
    button.disabled = false;
});


// On Load
selectMediaStream();