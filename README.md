
# Damage Tick

Increases the tick rate by 2 everytime you take damage.  

`data/functions/tick_convert.mcfunction` is dynamically generated due to the fact that the tick rate is a constant.  
File can be generated by running `node generate.js` in the root directory.  
It has 3 basic arguments at the top of it's file, `amount, tick_offset, and amount_step`.    

*Hasn't been tested in multiplayer but should work~*

> [!IMPORTANT]  
> Requires The [TickLowerPerm](https://modrinth.com/mod/ticklowerperm) Mod to work.  
> This is due to the fact that the /tick command doesn't work in commandblocks/functions in vanilla.  