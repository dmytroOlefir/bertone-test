<?php


function ad_color_title($atts, $content = null) {
    $content = do_shortcode($content);
    return '<span>'.$content.'</span>';
}
add_shortcode('color', 'ad_color_title');