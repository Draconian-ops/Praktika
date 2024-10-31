document.addEventListener("DOMContentLoaded", function () {
    const videoIds = ["F_7IPm7f1vI", "EezdinoG4mk", "IVgoBncPw4E", "ODvkZe98nkA", "AeJWlFuSCrw", "0Sg3MN0fkb4", "sxWJqMJdL04", "UXqq0ZvbOnk", "TGib186kF9g"];
    const apiKey = "AIzaSyAVeuZFb4KaOuYXBzKZTVdWXTguMuLTYKA";
    const cards = document.querySelectorAll(".card");
    const videoPlayer = document.querySelector(".video-player");
    const videoIframe = document.getElementById("video-iframe");

    // Create and add the close button to the video player overlay
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "Close";
    videoPlayer.appendChild(closeButton);

    // Function to format views
    function formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + "M"; // For millions
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + "K"; // For thousands
        }
        return views; // For values less than 1000
    }

    // Function to get YouTube video details
    async function fetchVideoDetails(videoId) {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.items[0];
    }

    // Populate cards with video data and add click functionality
    videoIds.forEach(async (videoId, index) => {
        if (index < cards.length) { // Ensure we have enough cards
            const videoData = await fetchVideoDetails(videoId);
            const card = cards[index];

            // Populate video thumbnail
            const thumbnailUrl = videoData.snippet.thumbnails.medium.url;
            card.style.backgroundImage = `url(${thumbnailUrl})`;
            card.style.backgroundSize = "cover";
            card.style.backgroundPosition = "center";

            // Populate duration and views
            const duration = videoData.contentDetails.duration.replace("PT", "").toLowerCase();
            const views = formatViews(videoData.statistics.viewCount);

            card.querySelector(".duration").textContent = duration;
            card.querySelector(".rating").textContent = views;

            // Make the card clickable to play video
            card.addEventListener("click", function () {
                // Set the iframe source to the YouTube embed link and show overlay
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                videoPlayer.classList.add("overlay-active");
                document.body.classList.add("overlay-visible");
            });
        }
    });

    // Close button functionality to hide the overlay and stop video playback
    closeButton.addEventListener("click", () => {
        videoPlayer.classList.remove("overlay-active");
        document.body.classList.remove("overlay-visible");
        videoIframe.src = ""; // Reset iframe source to stop playback
    });
});




  