package com.company;

public class ConjuredItemUpdater implements ItemUpdater {
    @Override
    public void updateQuality(Item conjuredItem) {
        conjuredItem.decreaseQualityIfNotMin();
        conjuredItem.decreaseQualityIfNotMin();
    }
}
