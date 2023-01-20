<?php

namespace AdminBookmarkPost\includes;

use AdminBookmarkPost\includes\Traits\UserMetaTrait;

class BookmarkPostAjax
{
  use UserMetaTrait;

  public function __construct()
  {
    add_action('wp_ajax_bookmark_post', [$this, 'bookmarkPost']);
  }

  public function bookmarkPost(): void
  {
    $postId = (int) $_REQUEST['postId'];
    $success = $this->addOrRemoveBookmark($postId);

    wp_send_json(['success' => $success]);
  }
}
