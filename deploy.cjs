const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  dotfiles: true,
  history: false,
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  } else {
    console.log('Deploy successful!');
  }
});
