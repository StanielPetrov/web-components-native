import './custom-elements.js';
import './blog-post.js';
import './blog-post-list.js';

const blogPostListElement = document.getElementById('blog-post-list');

blogPostListElement.posts = [
  {
    title: 'Deer',
    description: 'Deer or true deer are hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk (wapiti), the red deer, and the fallow deer; and the Capreolinae, including the reindeer (caribou), white-tailed deer, the roe deer, and the moose.',
    link: 'https://en.wikipedia.org/wiki/Deer',
    thumbnail: './assets/image-1.jpg',
  },
  {
    title: 'Elephant',
    description: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea.',
    link: 'https://en.wikipedia.org/wiki/Elephant',
    thumbnail: './assets/image-2.jpg',
  },
  {
    title: 'Sea Turtle',
    description: 'Sea turtles (superfamily Chelonioidea), sometimes called marine turtles, are reptiles of the order Testudines and of the suborder Cryptodira. The seven existing species of sea turtles are the flatback, green, hawksbill, leatherback, loggerhead, Kemps ridley, and olive ridley sea turtles.',
    link: 'https://en.wikipedia.org/wiki/Sea_turtle',
    thumbnail: './assets/image-3.jpg',
  },
  {
    title: 'Cheetah',
    description: 'The cheetah (Acinonyx jubatus) is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h (50 to 80 mph) with the fastest reliably recorded speeds being 93 and 98 km/h (58 and 61 mph), and as such has several adaptations for speed, including a light build, long thin legs and a long tail.',
    link: 'https://en.wikipedia.org/wiki/Cheetah',
    thumbnail: './assets/image-4.jpg',
  },
]