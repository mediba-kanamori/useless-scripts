(function() {
  'use strict';
  const clickLikeAll = () => {
    Array.prototype.forEach.call(document.querySelectorAll('.forceChatterToggleLike.cuf-likeLink'), (node) => {
      node.click();
    });
  };

  const showMore = () => {
    let el = document.querySelector('.cuf-showMore');
    if (el) {
      el.click();
      setTimeout(showMore, 2000);
    }

    clickLikeAll();
  }

  showMore();
})();