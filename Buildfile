# ===========================================================================
# Project:   SproutNews
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy '/pipes/pipe.run', :to => 'pipes.yahoo.com'