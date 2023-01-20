const classUtils = require('js-utils').class;
import '../css/bookmark-post.scss';

const bookmarkIcons = document.querySelectorAll('.column-bookmarked .bookmark-post');
bookmarkIcons.forEach(icon => icon.addEventListener('click', e => {

  const target = e.currentTarget;

  const url = adminBookmarkPostData.ajax_url + '?' + new URLSearchParams({
    action: 'bookmark_post',
    postId: target.dataset.postId,
  });

  fetch(url, { method: 'POST' })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        if (classUtils.hasClass(target, 'bookmarked')) {
          // bookmark removed
          target.setAttribute('title', 'Add bookmark');
          classUtils.removeClass(target, 'bookmarked');
        } else {
          // bookmark added
          target.setAttribute('title', 'Remove bookmark');
          classUtils.addClass(target, 'bookmarked');
        }
      }
    });
}));
