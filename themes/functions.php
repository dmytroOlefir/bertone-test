<?php

// ALL FUNCTIONS FILES - REQUIRE ONLY
require_once(__DIR__ . '/inc/custom-admin/index.php');
require_once(__DIR__ . '/inc/custom-post-types.php');
require_once(__DIR__ . '/inc/enqueue-scripts.php');
require_once(__DIR__ . '/inc/enqueue-stylesheets.php');
require_once(__DIR__ . '/inc/options-page.php');
require_once(__DIR__ . '/inc/register-navigation.php');
require_once(__DIR__ . '/inc/remove-comments.php');
require_once(__DIR__ . '/inc/remove-default-posts.php');
require_once(__DIR__ . '/inc/remove-emoji.php');
require_once(__DIR__ . '/inc/remove-guntenberg.php');
require_once(__DIR__ . '/inc/remove-jquery.php');
require_once(__DIR__ . '/inc/remove-top-bar.php');
require_once(__DIR__ . '/inc/theme-support.php');
require_once(__DIR__ . '/inc/altimage-devplus.php');
require_once(__DIR__ . '/inc/custom-content.php');
require_once(__DIR__ . '/inc/remove-default-wp-links.php');
require_once(__DIR__ . '/inc/rest-api.php');
require_once(__DIR__ . '/inc/custom-breadcrumbs.php');
require_once(__DIR__ . '/inc/custom-shortcode.php');


$timber = new \Timber\Timber();
