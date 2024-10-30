document.addEventListener("DOMContentLoaded", function() {
    const videoIds = ["F_7IPm7f1vI", "EezdinoG4mk", "IVgoBncPw4E", "ODvkZe98nkA", "AeJWlFuSCrw", "0Sg3MN0fkb4", "sxWJqMJdL04", "UXqq0ZvbOnk", "TGib186kF9g"];
    const apiKey = "AIzaSyAVeuZFb4KaOuYXBzKZTVdWXTguMuLTYKA";
    const cards = document.querySelectorAll(".card");
    const iframe = document.getElementById("video-iframe");

    // Function to get YouTube video details
    async function fetchVideoDetails(videoId) {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.items[0];
    }

    // Populate cards with video data
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
            const views = videoData.statistics.viewCount;

            card.querySelector(".duration").textContent = `Duration: ${duration}`;
            card.querySelector(".rating").textContent = `Views: ${views}`;

            // Make the card clickable to play video
            card.addEventListener("click", function() {
                // Set the iframe source to the YouTube embed link
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            });
        }
    });
});


  