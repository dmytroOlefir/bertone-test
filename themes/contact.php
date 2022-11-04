<?php
/**
 * Template Name: Contact
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context          = Timber::context();
$templates        = array( 'contact.twig' );

Timber::render( $templates, $context );