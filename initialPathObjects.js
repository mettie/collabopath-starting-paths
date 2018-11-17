module.exports.pathObjects = {
  '.': {
    text: 'You arrive at your destination: an abandoned hotel. Its decrepid, and falling apart. You hear some faint rustling inside...',
    image: 'sample.jpg',
    choiceL: {
      q: 'Invesitage by walking through the front door',
      image: 'sample.jpg',
      text: 'You walk up to the front door. Its really old, so instead of opening, it breaks from its hinges. In front of you is the main lobby. You spot a grand staircase leading up to the second floor. On the staircase, as well as everywhere on the floor there are little white pamphlets.',
      effect: 'NONE', // keep this one as is
    },
    choiceR: {
      q: 'Check out the side of the building',
      image: 'sample.jpg',
      text: 'You walk up to the side of the hotel. and spot a window thats been broken into. Theres broken glass everywhere in the alleyway. Way more than would come from a single window. You look up and notice all the windows have been shattered. Then you look back down and spot a little bag of gold. You wonder who could have left this behind...',
      effect: 'NONE', // keep this one as is
    },
  },
  '1': {
    choiceL: {
      text: 'You try to crawl through the broken window. But alas, you slipped and cut yourself while halfway through the window. You managed to get inside, although youre a bit scratched up. Inside you seem to be in some sort of closet. Its really dark, but thanks to some light coming in through the window you spot a door handle, and a light switch.',
      image: 'sample.jpg',
      q: 'Attempt to crawl through broken window',
      effect: 'NONE', // keep this one as is
    },
    choiceR: {
      text: 'You walk around to the back of the hotel. Here you see an entry to some kind of cellar. Beside the cellar is what appears to be a homeless man wearing a trench coat, and vigorously polishing something. He hears you approach and turns around. He starts to open his trench coat in front of you as you begin to panic about what might be underneath. But when he opened it, he revealed a small collection of interesting goodies...',
      image: 'sample.jpg',
      q: 'Go around to the back of the hotel',
      effect: 'NONE', // keep this one as is
    },
  },
  '10': {
    choiceL: {
      q: 'Turn on the light switch',
      image: 'sample.jpg',
      effect: 'INTELLIGENCE_U',
      text: 'You turn on the lights, and feel smarter for coming up with such a brilliant idea despite your previous misfortune. Inside the closet you notice a bunch of old employee uniforms',
    },
    choiceR: {
      q: 'Try to open the door',
      effect: 'NONE',
      text: 'You try to push the door, but its locked...',
      image: 'sample.jpg',
    },
  },
  '100': {
    choiceL: {
      q: 'Put on one of the employee uniforms for fun',
      effect: 'INTELLIGENCE_D',
      text: 'You put on an employees uniform, and while you look very fashionable, you feel silly for doing such a useless thing in a very spooky abandoned hotel. Since youve already put it on, you decide to keep wearing it',
      image: 'sample.jpg',
    },
    choiceR: {
      q: 'Try to open the door',
      effect: 'NONE',
      image: 'sample.jpg',
      text: 'You open the door and notice that youre in some sort of employee only area...',
    },
  },
  '11': {
    choiceL: {
      q: 'Try to go into the cellar',
      text: 'You pull on the doors really hard, but it wont budge. Finally you give it one last try, and it works, but since youve been pulling so hard, the door flies open and smacks you on the face!',
      effect: 'HEALTH_D',
      image: 'sample.jpg',
    },
    choiceR: {
      q: 'Go around to the other side of the building',
      text: 'You go around to the final side of the building. Here you see some grafitti on the wall: DONT LOOK AT IT! DONT LOOK AT IT! DONT LOOK AT IT! You wonder who couldve wrote this...',
      effect: 'SANITY_D',
      image: 'sample.jpg',
    },
  },
  '0': {
    choiceL: {
      text: 'You start walking upstairs, and notice the stairs are creaking very loudly. You wonder if you should continue...',
      image: 'sample.jpg',
      q: 'go upstairs',
      effect: 'NONE', // keep this one as is
    },
    choiceR: {
      text: 'You pick up one of the pamphlets. it reads: ATTENTION ALL HOTEL EMPLOYEES, CLIENTS, AND MAINTENANCE WORKERS! THE MANAGEMENT HAS DISCOVERED A CONTAMINATION. PLEASE EVACUATE IMMEDIATELY! You put the pamphlet down, and shudder.',
      image: 'sample.jpg',
      q: 'read one of the pamphlets',
      effect: 'NONE', // keep this one as is
    },
  },
  '01': {
    choiceL: {
      q: 'check out one of the other pamphlets',
      text: 'You pick up another pamphlet, and notice it says the exact same thing as the other one. You feel stupid for thinking that they might be different. As you are considering your foolishness you hear a loud bang down the hallway.',
      effect: 'INTELLIGENCE_D',
      image: 'sample.jpg',
    },
    choiceR: {
      q: 'go upstairs',
      text: 'You start to walk upstairs. The stairs are creeking louder the further up you go. Finally, you come to a stop when it sounds like it might collapse! You try to rush down back the stairs but its too late. The stairs collapse under you, and you fall down into a dark pit, covered in wood, and pamphlets. You cant see anything, but you hear the sound of water dripping in the distance',
      image: 'sample.jpg',
      effect: 'HEALTH_D',
    },
  },
  '00': {
    choiceL: {
      q: 'Yes, continue up the stairs.',
      effect: 'HEALTH_D',
      image: 'sample.jpg',
      text: 'You keep going up the stairs but the creeking keeps getting louder. You are only halfway up the stairs when they suddenly collapse beneath you. You get up from the debris of broken wood, and pamphlets and notice that youre in the hotel basement.',
    },
    choiceR: {
      q: 'No, go back down.',
      effect: 'HEALTH_D',
      image: 'sample.jpg',
      text: 'You decide its best to not take any risks, you start heading down the stairs, when all of a sudden you hear a crack below you, and the staircase collapsed right from under you! Luckily you were close enough to the bottom to jump away from the collapsing stairs, but you injured yourself in the process.',
    },
  },
}
