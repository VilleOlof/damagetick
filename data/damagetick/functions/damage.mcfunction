
scoreboard players add main damagecount 2

function damagetick:tick_convert

tellraw @a [{"text": "You took damage!", "color": "red"}, {"text": " (", "color": "gray"}, {"score":{"name":"main","objective":"damagecount"}, "color": "gray"}, {"text": " ticks)", "color": "gray"}]