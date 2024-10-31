<?php

/*
* Plugin name: RateX ils 
* Description: ratex ils is plugin with shortcode that you can use to display ils or new shekel to BTC,USD,EUR GBP and CNY rates
* Author: ofek nakar
* Version: 1.0.0
* Plugin URI: /ratex-ils
* Author URI: https://www.whoisofek.in
* Text Domain: ratex-ils
* License: GPLv2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html

*/

// Importing all scripts we need
if(!defined('ABSPATH')){
  exit;
}
add_shortcode('ratex-ils', 'ratexFunction');


function ratexFunction()
{
 
  if (!defined("REST_REQUEST")) {
    echo ("<div id='appvue'>
        <ratex-ils/>
    </div>");





  }

 wp_enqueue_script('script', get_template_directory_uri() . '/assets/vue.js', array('vue'), 1.1, true);


  wp_enqueue_script('app', plugin_dir_url(__FILE__) . '/components/app.js');
  wp_enqueue_script('vue', plugin_dir_url(__FILE__) . '/assets/vue.js');

 

}

 add_action('admin_menu', 'ratex_plugin_setup_menu');

function ratex_plugin_setup_menu()
{
  add_menu_page('Ratex ils plugin Page', 'Ratex ils', 'manage_options', 'ratex-ils-plugin', 'ratex_init');
}

function ratex_init()
{
  echo "<div id='ratexCustomWelcome' style='color:#4b68af;font-weight:900;'><h1>Ratex ILS   </h1><br>
    <p style='color:#000;font-size:.9em;'>by ofek nakar</p>
    <h4 style='color:#f96e61;font-weight:600;'>to display the rates data of ILS you can use this shortcode</h4><br>
    <p>[ratex-ils]</p>
    </div>";
}

// Add menu page to show plugin shortcode
