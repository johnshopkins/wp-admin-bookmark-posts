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

        if (target.classList.contains('bookmarked')) {
          // bookmark removed
          target.setAttribute('title', 'Add bookmark');
          target.classList.remove('bookmarked');
        } else {
          // bookmark added
          target.setAttribute('title', 'Remove bookmark');
          target.classList.add('bookmarked');
        }
      }
    });
}));
