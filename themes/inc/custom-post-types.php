<?php


// Add partners
function partner_register_post_types()
{
  $labels = array(
    'name' => 'Partenaires',
    'all_items' => 'Tous les partenaires',  // displayed in the sub-menu
    'singular_name' => 'Partenaire',
    'add_new_item' => 'Ajouter un partenaire',
    'edit_item' => 'Modifier le partenaire',
    'menu_name' => 'Partenaire',
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_in_rest' => true,
    'has_archive' => true,
    'supports' => array('title', 'thumbnail'),
    'menu_position' => 5,
    'menu_icon' => 'dashicons-sticky',
  );

  register_post_type('partner', $args);
}

add_action('init', 'partner_register_post_types');

// Add stories ----
function stories_register_post_types()
{
  $labels = array(
    'name' => 'Stories',
    'all_items' => 'Tous les stories',  // displayed in the sub-menu
    'singular_name' => 'Story',
    'add_new_item' => 'Ajouter une story',
    'edit_item' => 'Modifier la story',
    'menu_name' => 'Story',
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_in_rest' => true,
    'has_archive' => true,
    'supports' => array('title', 'thumbnail', 'author', 'page-attributes', 'excerpt'),
    'menu_position' => 5,
    'menu_icon' => 'dashicons-book',
  );

  register_post_type('story', $args);
}

add_action('init', 'stories_register_post_types');

// Add Policy position ----
function policy_register_post_types()
{
  $labels = array(
    'name' => 'Policies positions',
    'all_items' => 'Tous les Policies positions',  // displayed in the sub-menu
    'singular_name' => 'Policy position',
    'add_new_item' => 'Ajouter une policy position',
    'edit_item' => 'Modifier la policy position',
    'menu_name' => 'Policy position',
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'show_in_rest' => true,
    'has_archive' => true,
    'supports' => array('title', 'thumbnail'),
    'menu_icon' => 'dashicons-awards',
    'hierarchical'        => false,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 5,
    'can_export'          => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'page',
      
    'taxonomies'          => array( 'category' ),
  );

  register_post_type('policy', $args);
}

add_action('init', 'policy_register_post_types');
