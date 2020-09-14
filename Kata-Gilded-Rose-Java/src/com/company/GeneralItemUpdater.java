package com.company;

public class GeneralItemUpdater implements ItemUpdater {
    @Override
    public void updateQuality(Item generalItem) {
        generalItem.decreaseQualityIfNotMin();
        if (generalItem.getSellIn() <= 0) {
            generalItem.decreaseQualityIfNotMin();
        }
    }
}