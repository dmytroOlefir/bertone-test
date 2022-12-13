<?php
/**
 * Template Name: Page
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */
$post = new Timber\Post();

$context          = Timber::context();
$templates        = array( 'page.twig' );
$post->acf_content = get_field('content');
$post->meta_title = get_field('meta_title');
$post->meta_description = get_field('meta_description');
$post->meta_image = get_field('meta_image');
$context['post'] = $post; 

Timber::render( $templates, $context );