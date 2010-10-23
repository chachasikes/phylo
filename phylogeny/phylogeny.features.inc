<?php

/**
 * Implementation of hook_node_info().
 */
function phylogeny_node_info() {
  $items = array(
    'issue' => array(
      'name' => t('Issue'),
      'base' => 'node_content',
      'description' => t('An issue, brings together two notes.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'note' => array(
      'name' => t('Note'),
      'base' => 'node_content',
      'description' => t('A note. Has parent term, relationship to parent.'),
      'has_title' => '1',
      'title_label' => t('Descriptive Title for Note'),
      'help' => '',
    ),
    'story' => array(
      'name' => t('Story'),
      'base' => 'node_content',
      'description' => t('A story about a relationship.'),
      'has_title' => '1',
      'title_label' => t('Descriptive Title for Story'),
      'help' => '',
    ),
  );
  return $items;
}

/**
 * Implementation of hook_views_api().
 */
function phylogeny_views_api() {
  return array(
    'api' => '3.0-alpha1',
  );
}
