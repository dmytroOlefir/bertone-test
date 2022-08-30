<?php

// Breacrumbs -----
function get_breadcrumbs($visibleClass = '') {
  echo '<ol class="breadcrumbs '. $visibleClass.'" itemscope itemtype="http://schema.org/BreadcrumbList">';
  // Home -------
  echo '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="'.home_url().'" itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="/">
              <span itemprop="name">'
              . __('Home', 'Atelier Design') .
              '</span>
              <meta itemprop="position" content="1" />
            </a>
        </li>';
    // Category / Tags / Single
    if (is_single()) {
        // the_category();
        $postName = get_post_type();
        $allTypes = get_post_types();
        $n = 2;
        foreach($allTypes as $type) {
          if($type === $postName && get_field('id-breadcrumb-'.$type, 'option')) {
            $idPage = get_field('id-breadcrumb-'.$type, 'option');

            echo '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
              <a href="'.get_permalink($idPage).'" itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="'.get_permalink($idPage->ID).'">
                <span itemprop="name">'.ucfirst($type).'</span>
                <meta itemprop="position" content="'.$n.'" />
              </a>
            </li>';

            $n++;
          }
        }
      if (is_single()) {
        echo '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="'.get_permalink().'">
                  <span itemprop="name">'.get_the_title().'</span>
                </span>
                <meta itemprop="position" content="'.$n.'" />
        </li>';
      }
    } 
    // If is Category or Terms --------
    elseif(is_category()) {

    }
    // Page
    elseif (is_page()) {
      $n = 2;
      if (has_post_parent()) {
          $parent = get_post_parent();
          echo '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
              <a href="'.get_permalink($parent->ID).'" itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="'.get_permalink($parent->ID).'">
                  <span itemprop="name">'.$parent->post_title.'</span>
                </a>
                <meta itemprop="position" content="'.$n.'" />
        </li>';
        $n++;   
      }

      echo '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <span itemscope itemtype="http://schema.org/Thing" itemprop="item" itemid="'.get_permalink().'">
                  <span itemprop="name">'.get_the_title().'</span>
                </span>
                <meta itemprop="position" content="'.$n.'" />
        </li>';

    } 
    // 
    elseif (is_search()) {
        echo '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <span itemprop="name">'.__('Votre recherche:', 'Atelier Design').'</span>
          <meta itemprop="position" content="2" />
        </li>';
    }

    echo '</ol>';
}