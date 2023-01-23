<?php

namespace AdminBookmarkPost\includes\Traits;

trait UserMetaTrait
{
  /**
   * Retrieve an array of post IDs that the current user
   * bookmaked on this site.
   * @return array
   */
  protected function getUserBookmarks(): array
  {
    $meta = $this->getRawMetadata();
    $key = $this->getSiteKey();

    return $meta[$key] ?? [];
  }

  /**
   * Add or remove a bookmark from a user's metadata
   * @param $postId
   * @return bool
   */
  protected function addOrRemoveBookmark($postId): bool
  {
    if (!get_post($postId)) {
      return false;
    }

    $meta = $this->getRawMetadata();
    $key = $this->getSiteKey();

    if (!isset($meta[$key])) {
      $meta[$key] = [];
    }

    if (($foundKey = array_search($postId, $meta[$key])) !== false) {
      unset($meta[$key][$foundKey]);
    } else {
      $meta[$key][] = $postId;
    }

    $updatedMeta = update_user_meta(get_current_user_id(), 'bookmarked', $meta);

    return $updatedMeta !== false;
  }

  /**
   * Get a user's bookmarked metadata.
   * @return array
   */
  protected function getRawMetadata(): array
  {
    $meta = get_user_meta(get_current_user_id(), 'bookmarked', true);

    if (!$meta) {
      // meta did not exist
      $meta = [];
    }

    return $meta;
  }

  /**
   * Gets the key identifying the current site.
   * Enables use on multisite installations.
   * @return string
   */
  protected function getSiteKey(): string
  {
    return 'site-' . get_current_blog_id();
  }
}
