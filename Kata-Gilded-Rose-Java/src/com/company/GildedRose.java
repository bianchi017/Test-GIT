package com.company;

class GildedRose {
    Item[] items;

    public GildedRose(Item[] items) {
        this.items = items;
    }

    public void showItems() {
        for (Item item : items) {
            System.out.println("Name: " + item.getName() + " \tSell In: " + item.getSellIn() + " \tQuality: " + item.getQuality());
        }
    }

    public void updateItems() {
        for (Item item : items) {
            updateItemQuality(item);
            updateSellIn(item);
        }
    }

    private ItemUpdater getItemUpdater(Item item) {
        return switch (item.getName()) {
            case "Aged Brie" -> new AgedBrieItemUpdater();
            case "Backstage passes to a TAFKAL80ETC concert" -> new BackstagePassesItemUpdater();
            case "Sulfuras, Hand of Ragnaros" -> new SulfurasItemUpdater();
            case "Conjured Mana Cake" -> new ConjuredItemUpdater();
            default -> new GeneralItemUpdater();
        };
    }

    private void updateSellIn(Item item) {
        if (item.getName().equals("Sulfuras, Hand of Ragnaros")) {

        } else {
            item.decreaseSellInIfNotMin();
        }
    }

    private void updateItemQuality(Item item) {
        ItemUpdater updater = getItemUpdater(item);
        updater.updateQuality(item);
    }
}