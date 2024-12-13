import logo from "../assets/favicon.svg";
import underlineDesign from "../assets/underline-design.svg";
import swan from "../assets/swan.gif";
import eyeArt from "../assets/visual-eye-text.png";
import brand1 from "../assets/logo1.svg";
import brand2 from "../assets/logo2.svg";
import brand3 from "../assets/logo3.svg";
import brand4 from "../assets/logo4.svg";
import brand5 from "../assets/logo5.svg";
import eyeIcon from "../assets/eye-icon.svg";
import google from "../assets/google.svg";
import spring from "../assets/spring.png";
import poets from "../assets/poets.jpg";
import clearHeart from "../assets/clearheart.svg";
import listenIcon from "../assets/aud.svg";
import pauseListen from "../assets/audio-pause.svg";
import visual1 from "../assets/visual1.webp";
import redHeart from "../assets/reddheart.svg";
import blueGuitar from "../assets/blue-guitar.jpg";
import starryNight from "../assets/starry-night.jpg";
import footerIcon from "../assets/footerIcon.svg";

// Main images
const images = {
  logo,
  underlineDesign,
  swan,
  eyeArt,
  eyeIcon,
  google,
  spring,
  poets,
  clearHeart,
  listenIcon,
  visual1,
  redHeart,
  pauseListen,
  blueGuitar,
  starryNight,
  footerIcon,
};

// Brand logo images
const brands = {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
};

// Stats Data
const statsData = [
  { id: 1, number: "1,000+", description: "Projects successfully completed" },
  { id: 2, number: "4.6/5", description: "Web Rating" },
  {
    id: 3,
    number: "50,000",
    description: "Poetry lovers growing our community",
  },
  {
    id: 4,
    number: "500+",
    description: "Visual poets sharing their art with the world",
  },
];

// Poem Data
const poems = [
  {
    id: 1,
    title: "The Man with the Blue Guitar",
    text: `The man bent over his guitar,
A shearsman of sorts. The day was green.

They said, “You have a blue guitar,
You do not play things as they are.”

The man replied, “Things as they are
Are changed upon the blue guitar.”

And they said then, “But play, you must,
A tune beyond us, yet ourselves,

A tune upon the blue guitar
Of things exactly as they are.”


I cannot bring a world quite round,
Although I patch it as I can.

I sing a hero’s head, large eye
And bearded bronze, but not a man,

Although I patch him as I can
And reach through him almost to man.

If to serenade almost to man
Is to miss, by that, things as they are,

Say that it is the serenade
Of a man that plays a blue guitar.

Ah, but to play man number one,
To drive the dagger in his heart,

To lay his brain upon the board
And pick the acrid colors out,

To nail his thought across the door,
Its wings spread wide to rain and snow,

To strike his living hi and ho,
To tick it, tock it, turn it true,

To bang if form a savage blue,
Jangling the metal of the strings…

So that’s life, then: things as they are?
It picks its way on the blue guitar.

A million people on one string?
And all their manner in the thing

And all their manner, right and wrong,
And all their manner, weak and strong?

The feelings crazily, craftily call,
Like a buzzing of flies in the autumn air,

And that’s life, then: things as they are,
This bussing of the blue guitar.`,
    author: "Wallace Stevens",
    audioSrc: "/blue-guitar.mp4",
    image: images.blueGuitar,
  },
  {
    id: 2,
    title: "The Starry Night",
    text: `The town does not exist
except where one black-haired tree slips
up like a drowned woman into the hot sky.
The town is silent. The night boils with eleven stars.   
Oh starry starry night! This is how
I want to die.

It moves. They are all alive.
Even the moon bulges in its orange irons   
to push children, like a god, from its eye.
The old unseen serpent swallows up the stars.   
Oh starry starry night! This is how   
I want to die:

into that rushing beast of the night,   
sucked up by that great dragon, to split   
from my life with no flag,
no belly,
no cry.`,
    author: "Anne Sexton",
    audioSrc: "/starry-night.mp4",
    image: images.starryNight,
  },
  {
    id: 3,
    title: "Searching",
    text: `When the purple snap peas in the garden
    couldn’t find anything to grasp onto, the shoots
ferned into something unrecognizable. That was
that. There was simply no more living. The tomatoes,
believing they were near death, rushed to birth
fruit, and the very production took
the last life from them. Even the squash
was nothing without the blossom, and so in return.
Can you show me a body that is itself
whole? I think daily about the spotted turtle,
who I found trapped under the boardwalk
and carried back to the water, only to later
read that, if she’s moved too far, will spend
the rest of her life searching for her eggs.
How is it possible to define yourself by waiting
for someone you have never met?
`,
    author: "Jordan Pérez",
    audioSrc: "/searching-audio.mp4",
    image: images.visual1,
  },
];

export default images;
export { brands, statsData, poems };
