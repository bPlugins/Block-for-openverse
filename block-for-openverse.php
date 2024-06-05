<?php
/**
 * Plugin Name: Block For Openverse
 * Description: Effortlessly incorporate Openverse media content into your WordPress site with this block plugin.
 * Version: 1.0.0
 * Author URI: https://wpblocks.co
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: block-for-openverse
 */

// ABS PATH
if (!defined('ABSPATH')) {exit;}

// Constant
define('BPOV_PLUGIN_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('BPOV_ASSETS_DIR', plugin_dir_url(__FILE__) . 'assets/');

// Block For Openverse
class BPOVOpenVerse
{
    public function __construct()
    {
        add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
        add_action('init', [$this, 'onInit']);

        add_action('admin_init', [$this, 'registerytvgbSetting']);
        add_action('rest_api_init', [$this, 'registerytvgbSetting']);
    }

    public function registerytvgbSetting()
    {
        register_setting('bpov-block-for-openverse', 'bpov-block-for-openverse', array(
            'show_in_rest' => array(
                'name' => 'bpov-block-for-openverse',
                'schema' => array(
                    'type' => 'string',
                ),
            ),
            'type' => 'string',
            'default' => '',
            'sanitize_callback' => 'sanitize_text_field',
        ));
    }

    public function enqueueBlockAssets()
    {

        wp_register_style('bpov-block-for-openverse-style', plugins_url('dist/style.css', __FILE__), ['wp-editor'], BPOV_PLUGIN_VERSION);

        wp_register_script('bpov-block-for-openverse-script', plugins_url('dist/script.js', __FILE__), ['react', 'react-dom'], BPOV_PLUGIN_VERSION);

        wp_localize_script('bpov-block-for-openverse-script', 'bpovToken', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('wp_rest'),
        ]);

        wp_localize_script('bpov-block-for-openverse-script', 'bpovSearchData', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('wp_rest'),
        ]);

        wp_localize_script('bpov-block-for-openverse-script', 'bpov_getSearchContent', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('wp_rest'),
        ]);

        wp_localize_script('bpov-block-for-openverse-script', 'bpov_getWave', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('wp_rest'),
        ]);

    }

    public function onInit()
    {
        wp_register_style('bpov-block-for-openverse-editor-style', plugins_url('dist/editor.css', __FILE__), ['wp-edit-blocks', 'bpov-block-for-openverse-style'], BPOV_PLUGIN_VERSION); // Backend Style

        register_block_type(__DIR__, [
            'editor_style' => 'bpov-block-for-openverse-editor-style',
            'render_callback' => [$this, 'render'],
        ]); // Register Block

        wp_set_script_translations('bpov-block-for-openverse-editor-script', 'block-for-openverse', plugin_dir_path(__FILE__) . 'languages'); // Translate
    }

    public function render($attributes)
    {
        extract($attributes);

        $className = $className ?? '';
        $bpovOpenverse = 'wp-block-bpov-block-for-openverse ' . $className . ' align' . $align;

        wp_enqueue_style('bpov-block-for-openverse-style');
        wp_enqueue_script('bpov-block-for-openverse-script');

        ob_start();?>
		<div class='<?php echo esc_attr($bpovOpenverse); ?>' id='bpovOpenverse-<?php echo esc_attr($cId) ?>' data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

		<?php return ob_get_clean();
    } // Render
}
new BPOVOpenVerse();

require_once plugin_dir_path(__FILE__) . '/openverse/api.php';
