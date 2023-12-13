scoreboard objectives add damagecount dummy

# Reset 
scoreboard players set main damagecount 20
tick rate 20

tellraw @a {"text": "Loaded DamageTick Datapack @Olof", "color": "green"}