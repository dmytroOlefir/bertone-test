<?php
/**
 * Template Name: Timeline
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context          = Timber::context();
$templates        = array( 'timeline.twig' );

Timber::render( $templates, $context );