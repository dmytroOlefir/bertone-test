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
// $context['contactId'] = get_field('id-contact', 'option');

Timber::render( $templates, $context );