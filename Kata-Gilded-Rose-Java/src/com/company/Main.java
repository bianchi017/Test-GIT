package com.company;

public class Main {

    public static void main(String[] args) {
        System.out.println("======================== Gilded Rose Inventory System ========================");

        Item[] items = new Item[]{new Item("Lay's chips", 3, 15),
                new Item("Aged Brie", 15, 20),
                new Item("Sulfuras, Hand of Ragnaros", 0, 80),
                new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
                new Item("Backstage passes to a TAFKAL80ETC concert", 3, 20),
                new Item("Conjured Mana Cake", 10, 8)};

        GildedRose gildedRoseInventory = new GildedRose(items);
        System.out.println("Initial Inventory:");
        gildedRoseInventory.showItems();
        System.out.println("\nFinished Day 1:");
        gildedRoseInventory.updateItems();
        gildedRoseInventory.showItems();
        System.out.println("\nFinished Day 2:");
        gildedRoseInventory.updateItems();
        gildedRoseInventory.showItems();
        System.out.println("\nFinished Day 3:");
        gildedRoseInventory.updateItems();
        gildedRoseInventory.showItems();
        System.out.println("\nFinished Day 4:");
        gildedRoseInventory.updateItems();
        gildedRoseInventory.showItems();
        System.out.println("\nFinished Day 5:");
        gildedRoseInventory.updateItems();
        gildedRoseInventory.showItems();
    }
}
