<?php
/**
 * Template Name: About
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context          = Timber::context();
$templates        = array( 'about.twig' );
$context['newsletter_id'] = get_field('id-newsletter', 'option');

Timber::render( $templates, $context );