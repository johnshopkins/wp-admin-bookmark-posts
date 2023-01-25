<?php

/*
Plugin Name: Admin Bookmark Posts
Description: Allow users to bookmark posts they edit frequently
Author: Jen Wachter
Version: 0.1
*/

require 'vendor/autoload.php';

add_action('admin_init', function () {

  // post types that are bookmarkable (custom post types, page, pa
  $postTypes = get_post_types(['show_ui' => true, '_builtin' => false]);
  $postTypes['page'] = 'page';
  $postTypes['post'] = 'post';

  $postTypes = apply_filters('admin_bookmark_post_types', $postTypes);

  // alter post tables of bookmarkable post types
  array_map(static function ($type) {
    new AdminBookmarkPost\includes\PostTable($type);
  }, array_keys($postTypes));

  // add ajax worker
  new AdminBookmarkPost\includes\BookmarkPostAjax();

});

add_action('admin_enqueue_scripts', function ($hook) {
  if ($hook === 'edit.php') {
    $path = plugin_dir_url(__FILE__) . 'dist';
    wp_enqueue_script('admin-bookmark-post', $path .'/main.js', [], false, true);
    wp_localize_script('admin-bookmark-post', 'adminBookmarkPostData', ['ajax_url' => admin_url('admin-ajax.php')]);
  }
});


