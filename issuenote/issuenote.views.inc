<?php


/**
 * Implements hook_views_data()
 */
function issuenote_views_data() {
  $data = array();
  return $data;
}

/**
 * Implements hook_views_plugins
 */
function issuenote_views_plugins() {
  return array(
    'module' => 'issuenote',
    'style' => array(
      'treetable' => array(
        'title' => t('Get nodes in tree-like fashion'),
        'help' => t('Displays rows in a table in tree-like fashion.'),
        'handler' => 'issuenote_plugin_style_treetable',
        'path' => drupal_get_path('module', 'issuenote'),
/*         'parent' => 'views_plugin_style', */
        'theme' => 'issuenote_style_plugin_treetable',
/*         'base' => array('node'), // only works with 'node' as base. */
        'uses row plugin' => TRUE,
        'uses fields' => TRUE,
        'uses options' => TRUE,
        'type' => 'normal',
        'help topic' => 'style-unformatted',

      ),
    ),
  );
  return array();
}