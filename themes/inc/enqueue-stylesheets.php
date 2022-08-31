<?php

/**
 * Enqueue stylesheets
 */

function theme_register_styles()
{
  // wp_enqueue_style('font-style', get_template_directory_uri() . '/assets/fonts.css', array(), rand(111, 9999), 'all');
  // wp_enqueue_style('theme-style', get_template_directory_uri() . '/public/assets/main.css', array(), rand(111, 9999), 'all');
}

add_action('wp_enqueue_scripts', 'theme_register_styles');
