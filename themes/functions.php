<?php

// ALL FUNCTIONS FILES - REQUIRE ONLY
require_once(__DIR__ . '/inc/custom-admin/index.php');
require_once(__DIR__ . '/inc/custom-post-types.php');
require_once(__DIR__ . '/inc/enqueue-scripts.php');
require_once(__DIR__ . '/inc/enqueue-stylesheets.php');
require_once(__DIR__ . '/inc/options-page.php');
require_once(__DIR__ . '/inc/register-navigation.php');
require_once(__DIR__ . '/inc/remove-comments.php');
require_once(__DIR__ . '/inc/remove-default-posts.php');
require_once(__DIR__ . '/inc/remove-emoji.php');
require_once(__DIR__ . '/inc/remove-guntenberg.php');
require_once(__DIR__ . '/inc/remove-jquery.php');
require_once(__DIR__ . '/inc/remove-top-bar.php');
require_once(__DIR__ . '/inc/theme-support.php');
require_once(__DIR__ . '/inc/altimage-devplus.php');
require_once(__DIR__ . '/inc/custom-content.php');
require_once(__DIR__ . '/inc/remove-default-wp-links.php');
require_once(__DIR__ . '/inc/rest-api.php');
require_once(__DIR__ . '/inc/custom-breadcrumbs.php');
require_once(__DIR__ . '/inc/custom-shortcode.php');
require_once(__DIR__ . '/inc/custom-full-wysiwyg.php');


$timber = new \Timber\Timber();



/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		parent::__construct();
	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['menu']  = new Timber\Menu();
		$context['site']  = $this;
		return $context;
	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	// public function myfoo( $text ) {
	// 	$text .= ' bar!';
	// 	return $text;
	// }

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig\Extension\StringLoaderExtension() );
		// $twig->addFilter( new Twig\TwigFilter( 'myfoo', array( $this, 'myfoo' ) ) );
		return $twig;
	}

}

new StarterSite();