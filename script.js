let currentStory = 1; 
const totalStories = 4; 
function showStory(storyNumber) { 
  var stories = document.getElementsByClassName('story'); 
  var dots = document.getElementsByClassName('dot'); 
  for (var i = 0; i < stories.length; i++) { 
    stories[i].style.display = 'none'; 
    dots[i].className = dots[i].className.replace(' active', ''); 
  } 
  document.getElementById('story' + storyNumber).style.display = 'block'; 
  dots[storyNumber - 1].className += ' active'; 
  currentStory = storyNumber; 
} 
function showPreviousPage() { 
  if (currentStory > 1) { 
    showStory(currentStory - 1); 
  } 
} 
function showNextPage() { 
  if (currentStory < totalStories) { 
    showStory(currentStory + 1); 
  } 
} 
// Initialize first story and dot as active 
document.addEventListener('DOMContentLoaded', function () { 
  showStory(1);
});