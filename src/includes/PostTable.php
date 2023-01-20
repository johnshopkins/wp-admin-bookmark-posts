<?php

namespace AdminBookmarkPost\includes;

use AdminBookmarkPost\includes\Traits\UserMetaTrait;

class PostTable
{
  use UserMetaTrait;

  protected array $userBookmarks = [];

  public function __construct(protected $postType)
  {
    $this->userBookmarks = $this->getUserBookmarks();

    add_filter('pre_get_posts', [$this, 'addBookmarkedQueryOption']);
    add_filter('manage_edit-'. $postType .'_columns', [$this, 'addBookmarkedColumn'], 11, 2);
    add_filter('views_edit-'. $postType, [$this, 'addBookmarkedView']);

    add_action('manage_'. $postType .'_posts_custom_column', [$this, 'addBookmarkedColumnData'], 10, 2);
    add_action('restrict_manage_posts', [$this, 'addBookmarkedHiddenField']);
  }

  public function addBookmarkedQueryOption($query): void
  {
    if (isset($_GET['bookmarked']) && (int) $_GET['bookmarked'] === 1) {
      /*
       * Note: if $this->userBookmarks is empty, all posts are returned due
       * to a known bug: https://core.trac.wordpress.org/ticket/12212
       * A hack to fix this is to pass in an array containing 0 (there are
       * no posts with an ID of 0) instead of an empty array.
       */
      $ids = !empty($this->userBookmarks) ? $this->userBookmarks : [0];
      $query->set('post__in', $ids);
    }
  }

  public function addBookmarkedColumn($columns): array
  {
    if (current_user_can('edit_posts')) {
      $columns['bookmarked'] = __('Bookmark', 'bookmark');
    }
    return $columns;
  }

  public function addBookmarkedView($views): array
  {
    $count = $this->getTotalBookmarked();
    $class = isset($_GET['bookmarked']) ? 'current' : '';
    $views['bookmarked'] = "<a class=\"" . $class . "\" id=\"bookmarked-post-filter\" href=\"edit.php?&bookmarked=1&post_type={$this->postType}\">" . __('Bookmarked', 'bookmarked-post') . " <span class=\"count\">({$count})</span></a>";

    return $views;
  }

  public function addBookmarkedColumnData($column_name, $post_id): void
  {
    if ($column_name === 'bookmarked') {
      $isBookmarked = in_array($post_id, $this->userBookmarks);
      $classes = ['bookmark-post'];

      $icons = [
        '<svg class="icon-add" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.5 20.25V5.3q0-.75.525-1.275Q6.55 3.5 7.3 3.5H13V5H7.3q-.1 0-.2.1t-.1.2v12.65l5-2.15 5 2.15V11h1.5v9.25l-6.5-2.8ZM7 5h6-1Zm10 4V7h-2V5.5h2v-2h1.5v2h2V7h-2v2Z"/></svg>',
        '<svg class="icon-add-fill" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.5 20.25V5.3q0-.75.525-1.275Q6.55 3.5 7.3 3.5h6.575q-.425.675-.65 1.312Q13 5.45 13 6.25q0 1.775 1.15 3.1 1.15 1.325 2.85 1.575.425.05.75.05t.75-.05v9.325l-6.5-2.8ZM17 9V7h-2V5.5h2v-2h1.5v2h2V7h-2v2Z"/></svg>',
        '<svg class="icon-added" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M17.475 9 15 6.525l1.05-1.075 1.425 1.425L21 3.325 22.075 4.4ZM5.5 20.25V5.3q0-.75.525-1.275Q6.55 3.5 7.3 3.5h6.575q-.425.675-.65 1.312Q13 5.45 13 6.25q0 1.775 1.15 3.1 1.15 1.325 2.85 1.575.425.05.75.05t.75-.05v9.325l-6.5-2.8Z"/></svg>',
        '<svg class="icon-remove" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M20.5 7H15V5.5h5.5Zm-15 13.25V5.3q0-.75.525-1.275Q6.55 3.5 7.3 3.5h6.575q-.425.675-.65 1.312Q13 5.45 13 6.25q0 1.775 1.15 3.1 1.15 1.325 2.85 1.575.425.05.75.05t.75-.05v9.325l-6.5-2.8Z"/></svg>'
      ];

      $label  = 'Add bookmark';

      if ($isBookmarked) {
        $classes[] = 'bookmarked';
        $label = 'Remove bookmark';
      }

      echo '<a aria-label="'. $label .'" title="'. $label .'" href="#" class="'. implode(' ', $classes) .'" data-post-id="'. $post_id .'">'. implode('', $icons) .'</a>';
    }
  }

  public function addBookmarkedHiddenField($post_type): void
  {
    if ($post_type !== $this->postType) {
      return;
    }

    $value = !empty($_REQUEST['bookmarked']) ? (int) esc_attr($_REQUEST['bookmarked']) : 0;
    echo '<input type="hidden" name="bookmarked" value="'. $value .'" />';
  }

  protected function getTotalBookmarked(): int
  {
    if (empty($this->userBookmarks)) {
      return 0;
    }

    return count(get_posts([
      'post_type' => $this->postType,
      'include' => $this->userBookmarks,
      'numberposts' => -1,
      'post_status' => 'any'
    ]));
  }
}
