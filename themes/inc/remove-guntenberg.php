<?php

/**
 * Remove Gutenberg
 */

// for posts
add_filter('use_block_editor_for_post', '__return_false', 10);

// for post types
add_filter('use_block_editor_for_post_type', '__return_false', 10);

remove_filter( 'the_content', 'shortcode_unautop' );
