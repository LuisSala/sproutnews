# ===========================================================================
# Project:   SproutNews
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => [:sproutcore, "sproutcore/animation"]

proxy '/pipes/pipe.run', :to => 'pipes.yahoo.com'