package com.company;

public class AgedBrieItemUpdater implements ItemUpdater {
    @Override
    public void updateQuality(Item agedBrieItem) {
        agedBrieItem.increaseQualityIfNotMax();
    }
}

