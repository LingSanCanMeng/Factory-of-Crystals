ForgeEvents.onEvent(`net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent`, event => {
    event.setCanceled(true)
})