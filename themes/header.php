<?php
/**
 * Third party plugins that hijack the theme will call wp_head() to get the header template.
 * We use this to start our output buffer and render into the view/page-plugin.twig template in footer.php
 *
 * If you're not using a plugin that requries this behavior (ones that do include Events Calendar Pro and
 * WooCommerce) you can delete this file and footer.php
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$GLOBALS['timberContext'] = Timber::context();
$menu = new Timber\Menu( 'primary' );
$context['newsletter_id'] = get_field('id-newsletter', 'option');
$instagram = get_field('instagram', 'option');
$linkedin = get_field('linkedin', 'option');

ob_start();
