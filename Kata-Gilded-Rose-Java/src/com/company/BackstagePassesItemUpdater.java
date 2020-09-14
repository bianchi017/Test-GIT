package com.company;

public class BackstagePassesItemUpdater implements ItemUpdater {
    @Override
    public void updateQuality(Item backstagePassesItem) {
        backstagePassesItem.increaseQualityIfNotMax();
        if (backstagePassesItem.getSellIn() <= 10) {
            backstagePassesItem.increaseQualityIfNotMax();
        }
        if (backstagePassesItem.getSellIn() <= 5) {
            backstagePassesItem.increaseQualityIfNotMax();
        }
        if (backstagePassesItem.getSellIn() <= 0) {
            backstagePassesItem.resetQuality();
        }
    }
}
