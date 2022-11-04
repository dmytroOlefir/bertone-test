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

Timber::render( $templates, $context );