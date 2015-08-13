
get "/help" do
  helptext = ["Welcome to Tetris", "Use the arrow keys to rotate the falling block", "Press space bar to quickly drop the block", "Press play to play!"]
  helptext.to_json

end