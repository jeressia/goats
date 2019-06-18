const goats = [
  {
    id: 'goat1',
    name: 'Billy',
    disposition: 'rude',
    fullness: 67,
    imageUrl: 'data:image/jpeg;base64,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',
    favPose: 'downward facing dog',
    isFainting: true,
    color: 'white',
  },
  {
    id: 'goat2',
    name: 'Harry',
    disposition: 'mellow',
    fullness: 80,
    imageUrl: 'https://nationalzoo.si.edu/sites/default/files/animals/domestic-goat.jpg',
    favPose: 'upward facing dog',
    isFainting: false,
    color: 'brown',
  },
  {
    id: 'goat3',
    name: 'Mike',
    disposition: 'blah',
    fullness: 75,
    imageUrl: 'data:image/jpeg;base64,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',
    favPose: 'tree',
    isFainting: false,
    color: 'black',
  },
  {
    id: 'goat4',
    name: 'Sally',
    disposition: 'debbie downer',
    fullness: 26,
    imageUrl: 'https://pbs.twimg.com/profile_images/980547001166295041/eBs20xF4.jpg',
    favPose: 'mountain',
    isFainting: true,
    color: 'brown',
  },
  {
    id: 'goat5',
    name: 'Keisha',
    disposition: 'sunny',
    fullness: 99,
    imageUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_0/f_auto,q_auto,w_1100/v1555172619/shape/mentalfloss/iStock-177369626_0.jpg',
    favPose: 'warriot',
    isFainting: false,
    color: 'white',
  },
];

export default goats;
