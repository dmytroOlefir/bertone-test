<?php
add_action( 'rest_api_init', 'update_story_api' );

function update_story_api() {
//Add featured image
  register_rest_field( 
    ['story', 'policy'], // Where to add the field (Here, blog posts. Could be an array)
    'featured_image_src', // Name of new field (You can call this anything)
    array(
        'get_callback'    => 'get_image_src',
        'update_callback' => null,
        'schema'          => null,
        )
  );
  
  // DATE FORMAT
  register_rest_field( 
      'story', // Where to add the field (Here, blog posts. Could be an array)
      'date_format', // Name of new field (You can call this anything)
      array(
          'get_callback'    => function($object) {
            return get_the_date($object['post_id']);
          },
          'update_callback' => null,
          'schema'          => null,
          )
      );

  // DATE FORMAT
  register_rest_field( 
      'story', // Where to add the field (Here, blog posts. Could be an array)
      'content_format', // Name of new field (You can call this anything)
      array(
          'get_callback'    => function($object) {
            $content = excerpt(12, $object['post_id']);
            if (empty($content)) $content = getShortContent(get_field('article_chapo', $object['post_id']), 12);
            if (empty($content)) {
              $fields = get_fields($object['post_id']);
              if ($fields['flexible_content']) {
                foreach($fields['flexible_content'] as $field) {
                  foreach($field as $key => $value) {
                    if ($key == 'wysiwyg' || $key == 'text') {
                      $content = getShortContent($value, 12);
                      break;
                    }
                  }
                }
              }
            }

            return $content;
          },
          'update_callback' => null,
          'schema'          => null,
          )
      );
    
      register_rest_field( 
      'policy', // Where to add the field (Here, blog posts. Could be an array)
      'categories_format', // Name of new field (You can call this anything)
      array(
          'get_callback'    => function($object) {
            $categories = get_the_category($object['post_id']);
            $c = [];
            // foreach($categories as $category){
            //   return $category->name;
            // };

            // return join(',', $c);
            return $categories[0]->name;
          },
          'update_callback' => null,
          'schema'          => null,
          )
      );

  }


function get_image_src( $object, $field_name, $request ) {
  $feat_img_array = wp_get_attachment_image_src(
    $object['featured_media'],
    'large'
  );
  return $feat_img_array[0];
}
