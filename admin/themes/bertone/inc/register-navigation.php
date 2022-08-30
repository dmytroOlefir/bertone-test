<?php

/**
 * Register navigation
 */

function register_theme_nav()
{
  $locations = array(
    'primary' => "Primary navigation",
    'footer' => "Footer navigation",
    'footer-bottom' => "Footer bottom"
  );

  register_nav_menus($locations);
}

add_action('init', 'register_theme_nav');


// MENU WITH THREE ---
function buildTree( array &$elements, $parentId = 0 )
{
    $branch = array();
    foreach ( $elements as &$element )
    {
        if ( $element->menu_item_parent == $parentId )
        {
            $children = buildTree( $elements, $element->ID );
            if ( $children )
                $element->children = $children;

            $branch[$element->ID] = $element;
            unset( $element );
        }
    }
    return $branch;
}

function nav_menu_tree( $menu_id )
{
    $items = wp_get_nav_menu_items( $menu_id );
    return  $items ? buildTree( $items, 0 ) : null;
}