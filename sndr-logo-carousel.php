<?php
/**
 * Plugin Name:       Sundor Logo Carousel
 * Description:       A simple Gutenberg logo carousel widget.
 * Requires at least: 6.1
 * Requires PHP:      7.3
 * Version:           0.1.1
 * Author:            Md. Readush Shalihin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sndr-logo-carousel
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_sndr_form_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_sndr_form_block_init' );


/**
 * Enqueue assets for frontend.
 *
 *  Swiper Script and Style assets.
 *
 * @return void.
 */
function sndr_logo_carousel_enqueue_assets() {

	wp_enqueue_script( 'sndr-logo-carousel-swiper-scripts', plugin_dir_url( __FILE__ ) . 'assets/swiper-bundle.min.js', array(), false, true ); // ignore phpcs warning.
	wp_enqueue_script( 'sndr-logo-carousel-slider-scripts', plugin_dir_url( __FILE__ ) . 'assets/sndr-swiper-logo.js', array( 'sndr-logo-carousel-swiper-scripts', 'jquery' ), false, true ); // ignore phpcs warning.

	wp_enqueue_style( 'sndr-logo-carousel-swiper-styles', plugin_dir_url( __FILE__ ) . 'assets/swiper-bundle.min.css', array(), false, 'all' );
	wp_enqueue_style( 'sndr-logo-carousel-slider-styles', plugin_dir_url( __FILE__ ) . 'assets/sndr-swiper-logo.css', array(), false, 'all' );
}
add_action( 'wp_enqueue_scripts', 'sndr_logo_carousel_enqueue_assets' );

