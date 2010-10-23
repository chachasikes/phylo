--------------------------------------------------------------------------------
# PHYLO Map Maker
## Map & relate notes.
--------------------------------------------------------------------------------

### What is it?

Phylo Map Maker is a Drupal 7 product. It acts is a 'post-it' note wiki,
where the notes can have relationships and map to one another.

Stories can be attached to the relationships.

You can then visualize the map, and edit it further. Share
over web.

Since the tool is built with Drupal, the data can all be 
easily edited and managed. The information in the site can
also be re-presented in other formats, which can help in
content generation & promotion of the mapping project.

### About

* Contains a feature & set of related modules.
* The feature builds some views, content types and taxonomies that 
allow users to create 'Notes' and then relate them to each other.
* Lots of AJAX & recursive views loading. 
* Lots more AJAX coming.
* Phyllo: layered leaf of dough, Phylo: tribe -- inspired by phylogeny & trees.

#### Specs

* Fast
* Easy to use (building on Drupal 7 UX improvements and lots of jQuery UI)
* Mobile compatible
* Hackable (open-source)
* Cute visual appearance (editing should be a pleasure)
* Could export to diagram drawing programs like Gliffy
* Could be rendered to create hi-rez images that can go to print
* Designed for a small core team (of volunteers, mainly) but
can connect to folks for 1-time informational interviews
* Map can be public and created in real time


#### Paper Prototypes

It is going to be like this:
http://www.flickr.com/photos/linepithemate/sets/72157625202300368/

#### Kinds of projects this would work for

This is a working tool, for helping a group or individual come
to an understanding of how parts in a system relate. The tool
can be used to make a publicly editable wiki map - but the 
intended purpose is to keep the tool closer to the mappers.

This is a tool for collecting and understanding information,
think participatory research.

This is not a diagramming tool, nor is it supposed to be used 
to create canonical org charts. The information from this system
can be used to create more compelling relationship diagrams
and charts, as that is usually necessary for telling a story
to effect change.

The power of some of these group mapping sessions is in the
verbal communication and people relationship building. This
tool is intended to extend those dialogues beyond a meeting.

* Tactical Mapping: http://www.newtactics.org/en/tactical-mapping
* Collaborative idea mapping
* Policy mapping
* City systems mapping
* Coming to an understanding of changing systems in an organization
* Un-f*cking Cluster-f*cks
* Group post-it experiments
* Experimental diagramming
* Transcribing post-it mapping sessions
* Phylogenies: geneaology, related products, related species

#### Experimental Infographics

The goal is to provide some styleable themes for the maps.
These can get more complicated and fancier later, but for now
the map of nodes will be quite simple.

#### Info Architecture

Here is a basic overview of the architecture.

Project
Note
Story
Taxonomy: Relationships
Taxonomy: Note terms
Taxonomy: Story terms
Views: Projects (see projects, navigate maps)
Views: Note  (view 1 level of note descendants)
Views: Organize (assign notes, relate notes)

Main menu:
See Projects, New Project, New Note, New Story, Organize, Manage Relationships

#### Relationships Making

It's pretty simple.
You start with a project. The project has a seed term (or two terms, if you
are doing a tactical map - ex. 'victim' 'torturer.')

You then build notes. 

* You can add a bunch of notes all at once, just to get them in the system.
* You can assign and organize notes as you put them in the system.

When you organize the map, you can connect data to the notes.

* Add a 'parent': Who the note connects to
* Add a relationship: How the note connects to the parent
* Add a story: A story about how the note relates to its parent.

#### Map

Once your notes are all connected, then they can be mapped.

The styles that will be available to start:
* simple arrow that points to the parent note
* topological tree (similar to directories)
* bubble points to relationship and expands to be a story

Eventually this could be mapped on a slippy map, or with a
SOM (self-organizing map) - that's the goal because then it would
be possible to render the map for a printer. There is a good chance
that the visual part of the map could be converted to be compatible with 
Open Layers & geographically located notes.


However, there are enough Drupal 7 programming challenges, that
the cool visualization part can wait a bit.



#### Installation

This module isn't ready for installation yet.

But basically - Drupal 7 w/ features.
Eventually, there will be an install profile & make file
but for now the feature should turn on the right modules.

#### Collaboration

If you are interested in helping (November 2010)
let me know.

#### Developer

Chach Sikes  http://chachaville.com
Twitter @chachasikes
Github chachasikes

#### Thanks

Thanks to Kristin Antin of New Tactics for sharing
the tactical mapping methodology.

#### Github

http://github.com/chachasikes/phylo
