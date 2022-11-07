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
$context['contact_id'] = get_field('id-contact', 'option');

Timber::render( $templates, $context );