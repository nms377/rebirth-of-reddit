# Rebirth of Reddit

Super Awesome Co. has just been asked to concept a new Reddit theme. This is super last minute but we need to come up with a few concepts to propose to them by tomorrow. This could be huge for us and really put our shop on the map. We have to drop everything at once to hit this deadline.

## Game Plan

Use their subreddit API to create a Reddit clone with our own theme (See the layouts in the layouts directory). We can get the JSON feed of any sub-reddit by changing adding a `.json` extension to the URL.

`Ex. http://reddit.com/r/javascript -> http://reddit.com/r/javascript.json`

### Objectives

Use the sub-reddit API to achieve the following:

1. Create a simple client side application and set it up with our current workflow and create the new repo on GitHub.
  * Gulp
  * Sass
  * anything else...
1. Use the layouts defined in the Layouts directory
  - the image should fill the entire area of the rectangular box (use background-size "cover").
  - the title should never span more than 2 lines tall.
  - the subtitle line should never span more than 2 lines tall.
  - the text snippet should never span more than 4 lines tall, except for the small size, where it should be the height of the text.
  - Google fonts used in the layout:
    - Oswald Regular
    - Lato Regular
  - Use media query ranges as they make sense for the layout. The only 'media query' requirement is that the final webapp matches the mockups at the sizes specified, and that they gracefully transition at each range.
1. When the page loads we need to have the application go out to the API endpoint of your choosing to pull in the current feed via AJAX.
  - Interaction, Loading Data
      - create an xhr get request to `http://reddit.com/r/
1. Dynamically create feed list with the proposed style from the data received from the API.
1. Set up the project as a GitHub page to demo work.

To view the layouts visit the github page: [https://nms377.github.io/rebirth-of-reddit/](https://nms377.github.io/rebirth-of-reddit/)
