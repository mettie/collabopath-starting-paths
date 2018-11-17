# collabopath-starting-paths

There is just one file: initialPathObjects.js

The way it works is it exports the path objects so that the rest of the website can use them as the user traverses down the paths.

# IMPORTANT:

## How the path Ids work:

First of all, its important that the path Ids are all strings, because that's how the website knows that it is a path object it should render, and not something else like the landing page, or the choose your stats page.

The initial path id is a single dot: '.'

It is a special case because it needs to render both text, and an image before the user clicks anything. Then, it also contains a choiceL, and a choiceR object. if the user clicks the choiceL object they get taken to path 0, and if they click the choiceR object they get taken to path 1.

the path Ids always append onto each other. so when a user is at path 0, and then clicks choiceL it would be path 00, and if they click choiceL again it goes to path 000, but if they click choiceL again instead of going to 0000, it converts it to hex which would convert 0000 into 0. This is obviously a problem because how can you tell the difference between 0 and 0000? My solution was to simply consider this as a special case, and change it from 0 to the capital letter O. the same applies for 0001. Instead of considering this a 1 in hex, it changes it to a capital letter L. otherwise, if the path is something like 0101 then it converts it to hex normally, and changes it to 5. then if the user clicks on choiceR it would simply append it again, and it would become 51.

## How the rendering works:

This is a bit confusing. So it starts out with the initial path. The user only sees the following:

```
// path id '.'
text: 'You arrive at your destination: an abandoned hotel. Its decrepid, and falling apart. You hear some faint rustling inside...',
image: 'sample.jpg',
```

And under that there are 2 buttons that are part of path id '.':

```
      q: 'Invesitage by walking through the front door',
      q: 'Check out the side of the building',
```

Where the first q comes from choiceL and the next q comes from choiceR.
If the user clicks on the first q then the following will be rendered:

```
// path id '0' because the user clicked the left choice
image: 'sample.jpg',
text: 'You walk up to the front door. Its really old, so instead of opening, it breaks from its hinges. In front of you is the main lobby. You spot a grand staircase leading up to the second floor. On the staircase, as well as everywhere on the floor there are little white pamphlets.',

// NOTE that the text and image get rendered from the PREVIOUS path object
// and the choices get rendered from path id '0' because the user clicked choiceL in the previous path object:

q: 'go upstairs', // goes to path id '00'
q: 'read one of the pamphlets', // goes to path id '01'
```

lets say that the user clicks the 'read one of the pamphlets'
Then the following will be rendered:
```
// path id '01'
text: 'You pick up one of the pamphlets. it reads: ATTENTION ALL HOTEL EMPLOYEES, CLIENTS, AND MAINTENANCE WORKERS! THE MANAGEMENT HAS DISCOVERED A CONTAMINATION. PLEASE EVACUATE IMMEDIATELY! You put the pamphlet down, and shudder.',
image: 'sample.jpg',

// once again the text and image get rendered from the path id '0' where the choice was choiceR, and now the buttons get rendered from path id '01':

q: 'check out one of the other pamphlets',
q: 'go upstairs',
```


# making the path objects:

So you can just follow the template, and keep appending new paths onto it as you see fit. The important things are that the key should always be a string, and that it needs to have 2 properties: choiceL, and choiceR. each of the choices needs to have an image, a text, an effect, and a q property. You don't need to worry about the image properties, you can just leave them as an empty string. The text, and the q properties are really where the story is, so that is what you'll mainly be modifying.

Additionally, you can make effects if you'd like. Here is a list of all basic effects:

- 'NONE'
- 'GOLD',
- 'HEALTH_U'
- 'HEALTH_D'
- 'INTELLIGENCE_U'
- 'INTELLIGENCE_D'
- 'SANITY_U'
- 'SANITY_D'
- 'STAMINA_U'
- 'STAMINA_D'
- 'MERCHANT'
- 'FOUND_ITEM'

additionally there can be conditional effects. there are only two types: HAS, and CHECK

a CHECK effect is formatted as follows:

check(<STAT ATTRIBUTE>)<PICK ONE OF THE ABOVE EFFECTS>:<PICK ONE OF THE ABOVE EFFECTS>

Where the <STAT ATTRIBUTE> can be any of the following:

- HEALTH
- STAMINA
- SANITY
- INTELLIGENCE

here is an example:
```
check(HEALTH)FOUND_ITEM:NONE
```

and a HAS effect is formatted as follows:

has(<ITEM>)<PICK ONE OF THE ABOVE EFFECTS>:<PICK ONE OF THE ABOVE EFFECTS>

where <ITEM> can be any of the following:

-  'FLASHLIGHT',
-  'NICE_SWEATER',
-  'PEPE_MEME',
-  'GASOLINE',
-  'RED_KEY',
-  'GREEN_KEY',
-  'BLUE_KEY',
-  'TOOLBOX',
-  'MAP',
-  'TRACK_SUIT',
-  'UMBRELLA',
-  'FOOD',
-  'WATER',
-  'BOOK',
-  'KNIFE',
-  'SLINGSHOT',
-  'LIGHTER',
-  'TREBUCHET',

here is an example:
```
has(TREBUCHET)NONE:HEALTH_D
```

If you want, you can add effects as you see fit to the story, otherwise I can add them in later.


Lastly, please leave the effects as NONE for the objects where I have left a comment: // keep this one as it is
