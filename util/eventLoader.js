const reqEvent = (event) => require(`../events/${event}`);
module.exports = Guard => {
  Guard.on('ready', () => reqEvent('ready')(Guard));
  Guard.on('message', reqEvent('message'));
};

