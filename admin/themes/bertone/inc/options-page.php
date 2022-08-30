<?php

/**
 * Options page
 */

if (function_exists('acf_add_options_page')) {

  acf_add_options_page(array(
    'page_title'   => 'Options',
    'menu_title'  => 'Options',
    'menu_slug'   => 'theme-general-settings',
    'icon_url' => 'dashicons-admin-generic',
    'redirect'    => false
  ));

  acf_add_options_sub_page(array(
    'page_title'   => '404',
    'menu_title'  => '404',
    'parent_slug'  => 'theme-general-settings',
  ));
  acf_add_options_sub_page(array(
    'page_title'   => 'Social',
    'menu_title'  => 'Social',
    'menu_slug'   => 'social',
    'parent_slug'  => 'theme-general-settings',
  ));


  // ADD SOCIAL
  acf_add_local_field_group(array(
    'key' => 'social',
    'title' => 'URL Social',
    'fields' => array(
        array(
            'key' => 'facebook',
            'label' => 'Facebook',
            'name' => 'facebook',
            'type' => 'text',
        ),
        array(
            'key' => 'twitter',
            'label' => 'Twitter',
            'name' => 'twitter',
            'type' => 'text',
        ),
        array(
            'key' => 'instagram',
            'label' => 'Instagram',
            'name' => 'instagram',
            'type' => 'text',
        ),
        array(
            'key' => 'linkedin',
            'label' => 'Linkedin',
            'name' => 'linkedin',
            'type' => 'text',
        ),
        array(
            'key' => 'youtube',
            'label' => 'Youtube',
            'name' => 'youtube',
            'type' => 'text',
        ),
    ),
    'location' => array(
      array(
          array(
              'param' => 'options_page',
              'operator' => '==',
              'value' => 'social',
          ),
      ),
    ),
  ));

  // General
   acf_add_local_field_group(array(
    'key' => 'footer',
    'title' => 'Footer',
    'fields' => array(
        array(
            'key' => 'copyright',
            'label' => 'Copyright',
            'name' => 'copyright',
            'type' => 'text',
        ),
        array(
            'key' => 'contact',
            'label' => 'Contact',
            'name' => 'contact',
            'type' => 'repeater',
            'sub_fields' => array(
              array(
                'key' => 'contact-email',
                'label' => 'Email',
                'name' => 'contact-email',
                'type' => 'text',
              )
            ),
        ),
    ),
    'location' => array(
      array(
          array(
              'param' => 'options_page',
              'operator' => '==',
              'value' => 'theme-general-settings',
          ),
      ),
    ),
  ));

   acf_add_local_field_group(array(
    'key' => 'header',
    'title' => 'Header',
    'fields' => array(
        array(
            'key' => 'btn-header',
            'label' => 'Join us url',
            'name' => 'btn-header',
            'type' => 'page_link',
        ),
    ),
    'location' => array(
      array(
          array(
              'param' => 'options_page',
              'operator' => '==',
              'value' => 'theme-general-settings',
          ),
      ),
    ),
  ));

   acf_add_local_field_group(array(
    'key' => 'newsletter',
    'title' => 'Newsletter',
    'fields' => array(
        array(
            'key' => 'id-newsletter-footer',
            'label' => 'ID newlsetter',
            'name' => 'id-newsletter-footer',
            'type' => 'text',
        ),
    ),
    'location' => array(
      array(
          array(
              'param' => 'options_page',
              'operator' => '==',
              'value' => 'theme-general-settings',
          ),
      ),
    ),
  ));



   acf_add_local_field_group(array(
    'key' => 'breadcrumbs',
    'title' => 'Breadcrumbs',
    'fields' => array(
        array(
            'key' => 'id-breadcrumb-story',
            'label' => 'Page stories',
            'name' => 'id-breadcrumb-story',
            'type' => 'post_object',
	          'allow_null' => 1,
            'post_type' =>  ['page'],  // or array of post types e.g. ['post', 'page']
        ),
        array(
            'key' => 'id-breadcrumb-policy',
            'label' => 'Page policy position',
            'name' => 'id-breadcrumb-policy',
            'type' => 'post_object',
	          'allow_null' => 1,
            'post_type' =>  ['page'],  // or array of post types e.g. ['post', 'page']
        ),
    ),
    'location' => array(
      array(
          array(
              'param' => 'options_page',
              'operator' => '==',
              'value' => 'theme-general-settings',
          ),
      ),
    ),
  ));

}


