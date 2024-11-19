// Get all story elements
const stories = document.querySelectorAll('.story');

// Initial index of the current story
let currentStoryIndex = 0;

// Function to show the current story and hide others
function showStory(index) {
  // Make sure index is within bounds
  if (index < 0) index = stories.length - 1;
  if (index >= stories.length) index = 0;

  // Hide all stories
  stories.forEach((story, i) => {
    story.style.transform = `translateX(${(i - index) * 120}%)`; // Position stories based on index
  });

  // Update the current index
  currentStoryIndex = index;
}

// Add event listeners to the stories for navigation
stories.forEach((story, index) => {
  // Add the left and right clickable areas for each story
  const leftClickZone = document.createElement('div');
  leftClickZone.classList.add('click-zone', 'left');
  const rightClickZone = document.createElement('div');
  rightClickZone.classList.add('click-zone', 'right');

  // Append left and right click zones to each story
  story.appendChild(leftClickZone);
  story.appendChild(rightClickZone);

  // Left click zone to go to the previous story
  leftClickZone.addEventListener('click', () => {
    showStory(currentStoryIndex - 1);
  });

  // Right click zone to go to the next story
  rightClickZone.addEventListener('click', () => {
    showStory(currentStoryIndex + 1);
  });
});

// Initially display the first story
showStory(currentStoryIndex);